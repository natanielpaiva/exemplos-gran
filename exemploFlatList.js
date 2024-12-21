import { FlatList } from 'react-native';

const ProductList = ({ products }) => (
  <FlatList
    data={products}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => <ProductCard product={item} />}
  />
);