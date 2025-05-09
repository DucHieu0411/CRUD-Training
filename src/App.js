import { ToastContainer } from "react-toastify";
import "./App.scss";
import Header from "./components/layout/Header";
import TableUsers from "./components/layout/TableUsers";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <TableUsers />
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
