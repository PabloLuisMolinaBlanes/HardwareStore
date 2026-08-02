import Logo from "./components/logo/Logo";
import NavBar from "./components/navbar/NavBar";
import ColumnBar from "./components/productpage/columnbar/ColumnBar";
import ProductPage from "./components/productpage/ProductPage";

export default function Home() {
  return (<>
  <NavBar />
  <ColumnBar />
  <ProductPage />
  </>
  );
}
