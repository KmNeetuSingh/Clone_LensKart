import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SignIn from "./Pages/login/SignIn";
import SignUp from "./Pages/login/SignUp";
import Wishlist from "./Pages/Wishlist/Wishlist";
import Contact from "./Pages/Contact/Contact";
import KaranJoharProducts from "./ProductOne/KaranJoharProducts";
import KaranJohar from "./ProductTwo/KaranJohar";
import Cart from "./Pages/Cart/Cart";
import Kid from "./ProductTwo/Kid";
import KidProduct from "./ProductOne/KidProduct";
import Men from "./ProductTwo/Men";
import MenProduct from "./ProductOne/MenProduct";
import Women from "./ProductTwo/Women";
import WomenProduct from "./ProductOne/WomenProduct";
import MouniRoy from "./ProductTwo/MouniRoy";
import MouniRoyProduct from "./ProductOne/MouniRoyProduct";
import PremiumEyeGlassess from "./ProductTwo/PremiumEyeGlassess";
import PremiumEyeProduct from "./ProductOne/PremiumEyeProduct";
import EyeGlassKId from "./ProductTwo/EyeGlassKId";
import EyeGlassKidProduct from "./ProductOne/EyeGlassKidProduct";
import MenSunglassess from "./ProductTwo/MenSunglassess";
import MenSunGlassessProductDetails from "./ProductOne/MenSunglassessProduct";
import WomenSunglass from "./ProductTwo/WomenSunglass";
import WomenSunglassProductDetialls from "./ProductOne/womenSunglassProductDetialls";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/karanjoharproduct" element={<KaranJohar />} />
        <Route path="/karanjoharproduct/:id" element={<KaranJoharProducts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/kidProduct" element={<Kid />} />
        <Route path="/kidproduct/:id" element={<KidProduct />} />
        <Route path="/menproduct" element={<Men />} />
        <Route path="/menproduct/:id" element={<MenProduct />} />
        <Route path="/womenProduct" element={<Women />} />
        <Route path="/womenProduct/:id" element={<WomenProduct />} />
        <Route path="/mouniroyproduct" element={<MouniRoy />} />
        <Route path="/mouniroyproduct/:id" element={<MouniRoyProduct />} />
        <Route path="/premiumproduct" element={<PremiumEyeGlassess />} />
        <Route path="/premuimproduct/:id" element={<PremiumEyeProduct />} />
        <Route path="/kidsunglassess" element={<EyeGlassKId />} />
        <Route
          path="/kidsunglassessproduct/:id"
          element={<EyeGlassKidProduct />}
        />
        <Route path="/mensunglassess" element={<MenSunglassess />} />
        <Route
          path="/mensunglassessproduct/:id"
          element={<MenSunGlassessProductDetails />}
        />
        <Route path="/womensunglassess" element={<WomenSunglass />} />
        <Route path="/womensunglassess/:id" element = {<WomenSunglassProductDetialls/>} />
      </Routes>
    </>
  );
}

export default App;
