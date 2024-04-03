import Footer from "./components/layout/footer/Footer.jsx";
import Navbar from "./components/layout/navbar/Navbar.jsx";

import ItemListConteiner from "./components/pages/itemListContainer/ItemListConteiner.jsx";

function App() {
  const greeting = "Bienvenido a mi tienda!!!";
  return (
    <div>
      <Navbar />
      <ItemListConteiner greeting={greeting} />
      <Footer />
    </div>
  );
}

export default App;
