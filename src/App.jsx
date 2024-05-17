import React, { useState } from "react";
import Layout from "./components/layout/Layout";
import ItemDetails from "./components/pages/itemListContainer/ItemDetails";
import ItemListConteiner from "./components/pages/itemListContainer/ItemListConteiner";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartContext, CartProvider } from "./components/context/CartContext"; // Importa el contexto correctamente

function App() {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          {/* Definición del diseño principal de la aplicación */}
          <Layout>
            {/* Definición de las rutas y componentes asociados */}
            <Routes>
              <Route path="/" element={<ItemListConteiner />} />
              <Route path="/item/:id" element={<ItemDetails itemid={2} />} />
              <Route
                path="/productos/:categoria"
                element={<ItemListConteiner />}
              />
            </Routes>
          </Layout>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
