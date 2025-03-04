import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "../../constants/Colors";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import { FlatList } from "react-native";
import Categoryitem from "./Categoryitem";

export default function Category() {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    GetCategoryList();
  }, []);

  const GetCategoryList = async () => {
    setCategoryList([]);
    const q = query(collection(db, "Category"));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      setCategoryList((prev) => [...prev, doc.data()]);
    });
  };

  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 20,
          marginTop: 10,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontFamily: "outfit-bold",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          Category
        </Text>
        <Text style={{ color: Colors.PRIMARY, fontFamily: "outfit-medium" }}>
          View All
        </Text>
      </View>
      <FlatList
        data={categoryList}
        horizontal={true}
        style={{ marginLeft: 20, display: "flex" }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <Categoryitem
            category={item}
            key={index}
            onCategoryPress={(category) => console.log(category)}
          />
        )}
      />
    </View>
  );
}
