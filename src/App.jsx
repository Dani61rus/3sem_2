import { Footer, Header, Shop } from "./layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
  <>
  <Header></Header>
  
  <Shop></Shop>

  <Footer></Footer>
  <ToastContainer />
  </>
  );
  
}

export default App
