// App.js
import { useState } from "react";
import CityAndTime from "./components/CityAndTime";
import NavBar from "./components/NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [cityName, setCityName] = useState("");
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);

  // Function to update city based on search input
  const handleCitySearch = (city) => {
    setCityName(city);
    setLat(null);
    setLon(null);
  };

  // Function to set coordinates from current location
  const handleLocationFetch = (latitude, longitude) => {
    setLat(latitude);
    setLon(longitude); // fixed typo here
    setCityName("");
  };

  return (
    <div className="container mx-auto">
      <ToastContainer />
      <div className="w-full h-full">
        <NavBar onCitySearch={handleCitySearch} onLocationFetch={handleLocationFetch} />
      </div>
      <div>
        <CityAndTime
          cityName={cityName}
          lat={lat}
          lon={lon}
          setLat={setLat}
          setLon={setLon}
        />
      </div>
    </div>
  );
};

export default App;
