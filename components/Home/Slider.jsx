import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";

export default function Slider() {
  const [sliderList, setSliderList] = useState([]);

  useEffect(() => {
    GetSliderList();
  }, []);

  const GetSliderList = async () => {
    const tempList = [];
    const q = query(collection(db, "Slider"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      tempList.push(doc.data());
    });
    setSliderList(tempList);
  };

  return (
    <View>
      <Text style={{ fontFamily: "outfit-bold", fontSize: 20, padding: 20 }}>
        #Special for you
      </Text>
      <FlatList
        data={sliderList}
        keyExtractor={(item, index) => index.toString()} // Add keyExtractor
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingLeft: 20 }}
        renderItem={({ item }) => (
          <View style={{ marginRight: 10 }}>
            <Image
              source={{ uri: item.imgUrl }}
              style={{
                width: 300,
                height: 160,
                borderRadius: 10,
              }}
            />
          </View>
        )}
      />
    </View>
  );
}
