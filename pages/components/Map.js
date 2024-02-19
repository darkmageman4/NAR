import { useEffect } from 'react';
import tw from 'tailwind-styled-components'
import mapboxgl from "!mapbox-gl";

mapboxgl.accessToken = 'pk.eyJ1IjoiZGFya21hZ2VtYW40IiwiYSI6ImNrcHBtdzM2OTAya3oycXB0NjUyd2FwbGQifQ.ZxkFur5nI3aJZ19VNyDMFA'

const Map = () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
          container: 'map', // container ID
          style: 'mapbox://styles/mapbox/navigation-day-v1', 
          center: [-92.045303, 30.291835], // starting position [lng, lat]
          zoom: 3 // starting zoom
        });
      });
    
    
    return (
    <Wrapper id='map'>
      
    </Wrapper>
  )
}


const Wrapper = tw.div`
flex-1
`

export default Map
