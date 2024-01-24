import { useState } from "react";

import products from "./db/data";
import Card from "./components/Card";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Products from "./Products/Products";
import Details from "./Detail/Details";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");


  const filteredItems = products.filter(
    (product) => product.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, name }) => category === selected || name === selected
      );
    }

    return filteredProducts.map(({ imageUrl, name, star, reviews, price }) => (
      <Card
        key={Math.random()}
        imageUrl={imageUrl}
        name={name}
        star={star}
        reviews={reviews}
        price={price}
      />
    ));
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home setSelectedCategory={setSelectedCategory} setQuery={setQuery} query={query}/>}>
          <Route index element={<Products result={result} />} />
          <Route path="item/:id" element={<Details />} />
          <Route path=":id" element={<Details />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
