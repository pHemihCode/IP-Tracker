import {useEffect} from 'react';
import { MapContainer, TileLayer, Marker, Popup,useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Define the position type
type Coordinates ={
    lat:number;
    long:number;
    location: string
}
type Position = [number, number];

const RecenterMap = ({ position }: { position: Position }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(position); // Recenter the map when the position changes
  }, [position, map]);

  return null;
};

const Map = ({lat,long, location}:Coordinates) => {
  const position: Position = [lat, long]; // Coordinates for the center of the map

  return (
    <MapContainer center={position} zoom={13} style={{ height: '100vh', width: '100%'}}>
      <RecenterMap position={position} />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
       
      />
      <Marker position={position}>
        <Popup>
         {location}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
