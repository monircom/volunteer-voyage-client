import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";

const About = () => {
  const position = [23.864583, 90.380333];
  return (
    <div>
      
      <div className="w-full h-[100px] bg-[rgba(19,19,19,0.05)] rounded-xl flex justify-center items-center">
        <h1 className="text-3xl font-bold">Location</h1>
      </div>
      <div>
        <MapContainer
          center={position}
          zoom={12}
          scrollWheelZoom={false}
          style={{ minHeight: "50vh", minWidth: "65vw" }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              Mega Realtor
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default About;
