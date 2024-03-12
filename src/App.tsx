import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home.component";
import Cart from "./routes/Cart.component";
import Header from "./components/navigation";
import SignIn from "./routes/SignIn.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
      </Route>
      <Route path="/sign-in" element={<SignIn />}/>
    </Routes>
  );
};

export default App;
