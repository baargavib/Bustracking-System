import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { database } from "../firebase";
import { ref, onValue } from "firebase/database";

const BusTracking = () => {
  const [buses, setBuses] = useState([]);

  useEffect(() => {
    const busesRef = ref(database, "buses");
    onValue(busesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const busesArray = Object.keys(data).map((key) => ({ id: key, ...data[key] }));
        setBuses(busesArray);
      }
    });
  }, []);

  return (
    <div>
      <h2>Bus Tracking</h2>
      <MapContainer center={[12.9716, 77.5946]} zoom={13} style={{ height: "500px", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {buses.map((bus) => (
          <Marker key={bus.id} position={[bus.lat, bus.lng]}>
            <Popup>
              <b>Bus {bus.id}</b> <br />
              Location: {bus.lat}, {bus.lng}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default BusTracking;
