import Footer from "./footer/Footer";
import Navbarr from "./navbar/Navbar";
import ItemListConteiner from "../pages/itemListContainer/ItemListConteiner";
export const Layout = ({ children }) => {
  const handleCategoriaSeleccionada = (categoria) => {
    // Aquí puedes realizar acciones adicionales según la categoría seleccionada
    console.log(`Categoría seleccionada: ${categoria}`);
  };

  return (
    <div>
      <Navbarr enviarCategoria={handleCategoriaSeleccionada} />

      {children}
      <Footer />
    </div>
  );
};

export default Layout;
