import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Cards from "./components/Cards";
import CardDetails from "./components/CardDetails";
import { useSelector } from "react-redux";
import AllCards from "./components/AllCards";

function App() {
  const all = useSelector((state) => state.cartReducer);
  const selectedElement = all.currentElement;
  
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/cart/:id" element={<CardDetails selectedElement = {selectedElement}/>} />
        <Route path="/allItems" element={<AllCards allItems = {all.cart}/>} />
      </Routes>
    </div>
  );
}

export default App;
