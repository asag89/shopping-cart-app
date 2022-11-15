
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./page/Home";
import Product from "./page/Product";
import Cart from "./page/Cart";
import SharedLayout from "./components/SharedLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
