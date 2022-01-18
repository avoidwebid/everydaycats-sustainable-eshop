import { MapContainer, TileLayer, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const center = [40.7, 17.02];

const tileLayer = {
   attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
   url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
 }
const MapElement = () => {
  return (
    <MapContainer center={center} zoom={10} scrollWheelZoom={false}>
      <TileLayer {...tileLayer} />

      <Circle center={center} radius={5000} pathOptions={{ color: 'blue' }} />


    </MapContainer>
  )
}

export default MapElement;