import Footer from "./components/layout/footer/Footer.jsx";
import Navbar from "./components/layout/navbar/Navbar.jsx";

import ItemListConteiner from "./components/pages/itemListContainer/ItemListConteiner.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListConteiner />
      <Footer />
    </div>
  );
}

export default App;
