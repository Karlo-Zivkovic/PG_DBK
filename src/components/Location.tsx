import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { useState } from "react";

const containerStyle = {
  width: "full",
  height: "440px",
};
const center = {
  lat: 42.6479862,
  lng: 18.08809,
};
const Location = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });
  const [infoWindowOpen, setInfoWindowOpen] = useState(false);

  const toggleInfoWindow = () => {
    setInfoWindowOpen(!infoWindowOpen);
  };

  if (!isLoaded) {
    return <div>Could not load the map, please try again later</div>;
  }

  return (
    <>
      <div className="flex items-center justify-between mt-4">
        <p className="font-merriweather text-crna">Naša Lokacija</p>
        <div className="flex gap-4 items-center">
          <img src="mdi_home-variant-outline.svg" alt="phone icon" />
          <p className="font-medium text-sm">
            Adresa: Ul. Iva Vojnovića 12, 20 000 Dubrovnik
          </p>
        </div>
      </div>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        <Marker position={center} onClick={toggleInfoWindow}>
          {infoWindowOpen && (
            <InfoWindow onCloseClick={toggleInfoWindow}>
              <div>
                <p>Adresa: Ul. Iva Vojnovića 12, 20 000 Dubrovnik</p>
              </div>
            </InfoWindow>
          )}
        </Marker>
      </GoogleMap>
    </>
  );
};
export default Location;
