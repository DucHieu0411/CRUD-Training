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
    </>
  );
}

export default App;
