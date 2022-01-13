import { Router, LocationProvider } from "@reach/router";
import Header from "./components/Header";
import Map from "./components/Map";

function App() {
  return (
    <LocationProvider>
      <div className="App">
        <Router>
          <Header path="/" />
          <Map path="map" />
        </Router>
      </div>
    </LocationProvider>
  );
}

export default App;
