import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import DisplayCounter from "./components/DisplayCounter";
import Model from "./components/Model";
import Controls from "./components/Controls";

function App() {

  return (
    <div className="px-4 py-5 my-5 text-center d-flex justify-content-center align-items-center">
      <Model>
        <Header />
        <div className="col-lg-6 mx-auto">
          <DisplayCounter />
          <Controls />
        </div>
      </Model>
    </div>
  )
}

export default App
