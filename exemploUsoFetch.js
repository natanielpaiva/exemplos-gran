import React from "react";
import { View, Text, ActivityIndicator, FlatList } from "react-native";
import useFetch from "./useFetch";

export default function App() {
  const { data, loading, error } = useFetch("https://api.example.com/items");

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Erro: {error.message}</Text>;
  }

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Text style={{ padding: 10 }}>{item.name}</Text>
      )}
    />
  );
}