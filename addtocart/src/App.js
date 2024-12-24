import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Cards from "./components/Cards";
import CardDetails from "./components/CardDetails";
import { useSelector } from "react-redux";
import AllCards from "./components/AllCards";
import NotFoundPage from "./components/NotFoundPage";

function App() {
  // Getting the data from the reducer
  const allCartData = useSelector((state) => state.cartReducer);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route
          path="/cart/:id"
          element={
            <>
              <h2 className="text-center">Items Details Page</h2>
              <CardDetails
                selectedElement={allCartData.currentElement} />
            </>
          } />
        <Route path="/allItems" element={<AllCards allItems={allCartData.cart} />} />
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
