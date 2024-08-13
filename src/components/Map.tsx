
import React from 'react';
import 'leaflet/dist/leaflet.css'
import { Marker, Popup } from 'react-leaflet';
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import MarkerClusterGroup from 'react-leaflet-cluster';
import { Icon } from 'leaflet'



const Map = ({ lat, lng }: { lat: string, lng: string }) => {
    const position = [Number(lat), Number(lng)]; // [latitude, longitude]

    const housingIcon = new Icon({
        iconUrl: 'https://img.icons8.com/?size=100&id=aXqSmqDrRquU&format=png&color=000000',
        iconSize: [38, 45], // size of the icon
        iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
        popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
    })
    const mapOptions = {
        center: [Number(lat), Number(lng)],
        zoom: 15,
        maxZoom: 16,
        minZoom: 12,
    };

    const sizeMarkerIcon = 50

    const IconMarker = new Icon({
        iconUrl: `data:image/svg+xml;utf8,${encodeURIComponent(`<?xml version="1.0" encoding="iso-8859-1"?>
    <svg xmlns="http://www.w3.org/2000/svg" width="0.67em" height="1em" viewBox="0 0 1024 1536">
      <path fill="#0c6da4" d="M768 512q0-106-75-181t-181-75t-181 75t-75 181t75 181t181 75t181-75t75-181m256 0q0 109-33 179l-364 774q-16 33-47.5 52t-67.5 19t-67.5-19t-46.5-52L33 691Q0 621 0 512q0-212 150-362T512 0t362 150t150 362" />
    </svg>  
  `)}`,
        iconSize: [sizeMarkerIcon, sizeMarkerIcon],
        iconAnchor: [sizeMarkerIcon / 2, sizeMarkerIcon],
        popupAnchor: [0, -sizeMarkerIcon]
    })

    return (

        <MapContainer {...mapOptions} style={{ height: '400px', width: '100%' }} >
            <TileLayer
                // attribution='<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MarkerClusterGroup >
                <Marker position={position} icon={IconMarker}
                // icon={housingIcon}
                >
                    <Popup>
                        Praktiga <br /> Identity & Access Management Consulting
                    </Popup>
                </Marker>
            </MarkerClusterGroup>
        </MapContainer>
    );
};

export default Map;

