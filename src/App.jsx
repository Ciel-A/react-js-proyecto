import Layout from "./components/layout/Layout.jsx";
import ItemDetails from "./components/pages/itemListContainer/ItemDetails.jsx";
import ItemListConteiner from "./components/pages/itemListContainer/ItemListConteiner.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      {" "}
      <BrowserRouter>
        <Layout>
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
    </div>
  );
}

export default App;
