import { type EventedProps } from '@react-leaflet/core';
import { Icon } from 'leaflet';
import { type LatLngExpression, Marker as LeafletMarker, type MarkerOptions } from 'leaflet';
import type { ReactNode } from 'react';


declare module 'leaflet' {
  export interface MarkerOptions {
    children?: ReactNode;
    position: LatLngExpression;
    icon?: Icon;
  }
}