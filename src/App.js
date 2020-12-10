import ProductsTable from "./components/products-table";
import AppCardProvider from "./providers/cardProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
      <AppCardProvider>
        <ProductsTable />
      </AppCardProvider>
    </div>
  );
}

export default App;
