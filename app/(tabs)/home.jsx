import React from "react";
import { View, ScrollView } from "react-native";
import Header from "../../components/Home/Header";
import Slider from "../../components/Home/Slider";
import Category from "../../components/Home/Category";
import BusinessList from "../../components/Home/BusinessList";

export default function Home() {
  return (
    <ScrollView>
      {/** Header */}
      <Header />
      {/** Slider */}
      <Slider />
      {/** Category */}
      <Category />
      {/** Popular Business List */}
      <BusinessList />
      <View style={{ height: 50 }}></View>
    </ScrollView>
  );
}
