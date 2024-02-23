import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Partners from "./components/Partners";
import QuestionForUs from "./components/QuestionForUs";

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <QuestionForUs />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
