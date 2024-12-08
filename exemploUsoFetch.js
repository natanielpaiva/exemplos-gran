import React from "react";
import useFetch from "./useFetch";

function App() {
  const { data, error, loading } = useFetch("https://api.example.com/items");

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Ocorreu um erro: {error.message}</p>;

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}