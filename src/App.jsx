// Components
import Colors from "./Components/Colors";
import Hero from "./Components/Hero";
import HighLights from "./Components/HighLights";
import Intro from "./Components/Intro";
import NavBar from "./Components/NavBar";

function App() {

  return (
    <div>
      <NavBar/>
      <Hero/>
      <Intro/>
      <HighLights/>
      <Colors/>
    </div>
  );
}

export default App;
