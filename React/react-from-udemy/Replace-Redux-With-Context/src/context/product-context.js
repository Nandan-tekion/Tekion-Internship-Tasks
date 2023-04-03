import React, { useState } from "react";

const initialState = [
  {
    id: "p1",
    title: "Red Scarf",
    description: "A pretty red scarf.",
    isFavorite: false,
  },
  {
    id: "p2",
    title: "Blue T-Shirt",
    description: "A pretty blue t-shirt.",
    isFavorite: false,
  },
  {
    id: "p3",
    title: "Green Trousers",
    description: "A pair of lightly green trousers.",
    isFavorite: false,
  },
  {
    id: "p4",
    title: "Orange Hat",
    description: "Street style! An orange hat.",
    isFavorite: false,
  },
];

export const ProductsContext = React.createContext({ products: [], toogleFav : (id) => {} });

export default function ProductsProvider(props) {
  const [productsList, setProductsList] = useState(initialState);

  const toggleFavroite = (productId) => {
    setProductsList((currentProdState) => {
      const prodIndex = currentProdState.findIndex((p) => p.id === productId);
      const newFavStatus = !currentProdState[prodIndex].isFavorite;
      const updatedProducts = [...currentProdState];
      updatedProducts[prodIndex] = {
        ...currentProdState[prodIndex],
        isFavorite: newFavStatus,
      };
      return updatedProducts;
    });
  };
  return (
    <ProductsContext.Provider value={{ products: productsList, toogleFav : toggleFavroite }}>
      {props.children}
    </ProductsContext.Provider>
  );
}
