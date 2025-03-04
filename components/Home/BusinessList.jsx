import { View, Text, FlatList } from "react-native";
import { Colors } from "../../constants/Colors";
import React, { useEffect, useState } from "react";
import { collection, getDocs, query, limit } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import PopularBusinessCard from "./PopularBusinessCard";

export default function BusinessList() {
  const [businessList, setBusinessList] = useState([]);

  useEffect(() => {
    GetBusinessList();
  }, []);

  const GetBusinessList = async () => {
    try {
      setBusinessList([]); // Clear list before fetching
      const q = query(collection(db, "BusinessList"), limit(10));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        console.log("No businesses found.");
        return;
      }

      const businesses = [];
      querySnapshot.forEach((doc) => {
        console.log("Business:", doc.data());
        businesses.push({ id: doc.id, ...doc.data() }); // Ensure unique ID
      });

      setBusinessList(businesses); // Set data once
    } catch (error) {
      console.error("Error fetching business list:", error);
    }
  };

  return (
    <View>
      <View
        style={{
          padding: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <Text style={{ fontSize: 20, fontFamily: "outfit-bold" }}>
          Popular Business
        </Text>
        <Text style={{ color: Colors.PRIMARY, fontFamily: "outfit-medium" }}>
          View All
        </Text>
      </View>
      <FlatList
        data={businessList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id} // ✅ Uses Firestore doc ID
        renderItem={({ item }) => <PopularBusinessCard business={item} />}
      />
    </View>
  );
}
