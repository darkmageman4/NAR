import { useEffect } from 'react';
import tw from 'tailwind-styled-components'
import mapboxgl from "!mapbox-gl";


mapboxgl.accessToken = 'pk.eyJ1IjoiZGFya21hZ2VtYW40IiwiYSI6ImNrcHBtdzM2OTAya3oycXB0NjUyd2FwbGQifQ.ZxkFur5nI3aJZ19VNyDMFA'

const Map = (props) => {
  console.log(props)
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/navigation-day-v1',
      center: [-92.045303, 30.291835], // starting position [lng, lat]
      zoom: 3 // starting zoom
    });
    if (props.pickupCoordinates) {
      addToMap(map, props.pickupCoordinates)
    }
    if (props.dropoffCoordinates) {
      addToMap(map, props.dropoffCoordinates)
    }
    if (props.pickupCoordinates && props.dropoffCoordinates) {
      map.fitBounds([
        props.dropoffCoordinates,
        props.pickupCoordinates,
      ],
        {
          padding: 60
        }
      )
    }

  }, [props.pickupCoordinates, props.dropoffCoordinates])

  // Create a default Marker and add it to the map.
  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker({ color: 'red', rotation: 90 })
      .setLngLat(coordinates)
      .addTo(map);
  }

  return (
    <Wrapper id='map' className='marker1'></Wrapper>
  )
}

export default Map

const Wrapper = tw.div`
flex-1
`

