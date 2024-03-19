import Heading from "./components/Heading";
import SubHeading from "./components/SubHeading";
import CurrentTime from "./components/CurrentTime";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <center>
      <Heading />
      <SubHeading />
      <CurrentTime />
    </center>
  )
}

export default App
