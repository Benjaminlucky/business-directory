import { View, Text, Image } from "react-native";
import { Colors } from "../../constants/Colors";
import React from "react";

export default function PopularBusinessCard({ business }) {
  return (
    <View
      style={{
        marginLeft: 20,
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 15,
      }}
    >
      <Image
        source={{ uri: business?.imgUrl }}
        style={{
          width: 200,
          height: 130,
          borderRadius: 15,
        }}
      />
      <View style={{ marginTop: 7, gap: 5 }}>
        <Text style={{ fontFamily: "outfit-bold", fontSize: 17 }}>
          {business.name}
        </Text>
        <Text
          style={{ fontFamily: "outfit", fontSize: 10, color: Colors.GRAY }}
        >
          {business.address}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "5",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
            }}
          >
            <Image
              source={require("../../assets/star.png")}
              style={{ width: 15, height: 15 }}
            />
            <Text style={{ fontFamily: "outfit" }}>4.5</Text>
          </View>
          <Text
            style={{
              fontFamily: "outfit",
              backgroundColor: Colors.PRIMARY,
              color: "#fff",
              padding: 4,
              fontSize: 12,
              borderRadius: 5,
            }}
          >
            {business.category}
          </Text>
        </View>
      </View>
    </View>
  );
}
