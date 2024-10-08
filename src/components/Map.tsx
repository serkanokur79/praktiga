
import React from 'react';
import 'leaflet/dist/leaflet.css'
import { Marker, Popup } from 'react-leaflet';
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import MarkerClusterGroup from 'react-leaflet-cluster';
import L from 'leaflet'



const Map = ({ lat, lng }: { lat: string, lng: string }) => {
    const position = [Number(lat), Number(lng)]; // [latitude, longitude]

    const housingIcon = new L.Icon({
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
    const markerOptions = {
        position: [Number(lat), Number(lng)],
        icon: housingIcon,
        popup: 'Praktiga <br /> Identity & Access Management Consulting'
    }



    return (

        <MapContainer {...mapOptions} style={{ height: '400px', width: '100%' }} >
            <TileLayer
                // attribution='<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MarkerClusterGroup >
                <Marker {...markerOptions}>
                    <Popup>
                        Praktiga <br /> Identity & Access Management Consulting
                    </Popup>
                </Marker>
            </MarkerClusterGroup>
        </MapContainer>
    );
};

export default Map;

