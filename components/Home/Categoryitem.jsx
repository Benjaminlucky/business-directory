import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "react-native";
import { Colors } from "../../constants/Colors";

export default function CategoryItem({ category, onCategoryPress }) {
  return (
    <TouchableOpacity onPress={() => onCategoryPress(category)}>
      <View
        style={{
          padding: 15,
          backgroundColor: Colors.GRAY,
          borderRadius: 99,
          marginRight: 20,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Image
          source={{ uri: category.iconUrl }}
          style={{ width: 40, height: 40 }}
        />
      </View>
      <Text
        style={{
          fontSize: 12,
          fontFamily: "outfit-medium",
          textAlign: "center",
          marginTop: 10,
        }}
      >
        {category.name}
      </Text>
    </TouchableOpacity>
  );
}
