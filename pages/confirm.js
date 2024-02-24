import { useEffect, useState } from 'react'
import React from 'react'
import tw from 'tailwind-styled-components'
import Map from './components/Map'

const Confirm = () => {

  const [pickupCoordinates, setPickupCoordinates] = useState();
  const [dropoffCoordinates, setDropoffCoordinates] = useState();

  const getPickUpCoordinates = () => {
    const pickup = 'Santa Monica '
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
      new URLSearchParams({
        access_token: 'pk.eyJ1IjoiZGFya21hZ2VtYW40IiwiYSI6ImNrcHBtdzM2OTAya3oycXB0NjUyd2FwbGQifQ.ZxkFur5nI3aJZ19VNyDMFA',
        limit: 1
      }))
      .then(response => response.json())
      .then(data => {
        console.log("Pickup: " + data.features[0].center);
        setPickupCoordinates(data.features[0].center);
      })
      .catch(error => {
        console.error("YOU SHALL NOT PASS:" + error);
      });
  }

  const getDropOffCoordinates = () => {
    const dropoff = 'Los Angeles'
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
      new URLSearchParams({
        access_token: 'pk.eyJ1IjoiZGFya21hZ2VtYW40IiwiYSI6ImNrcHBtdzM2OTAya3oycXB0NjUyd2FwbGQifQ.ZxkFur5nI3aJZ19VNyDMFA',
        limit: 1
      }))
      .then(response => response.json())
      .then(data => {
        console.log("DropOff: " + data.features[0].center);
        setDropoffCoordinates(data.features[0].center);
      })
      .catch(error => {
        console.error("YOU SHALL NOT PASS:" + error);
      });

  }

  useEffect(() => {
    getPickUpCoordinates();
    getDropOffCoordinates();
  }, [])

  console.log("pickupCoordinates: " + pickupCoordinates)
  console.log("dropoffCoordinates: " + dropoffCoordinates)

  return (
    <Wrapper>
      <Map
        pickupCoordinates = {pickupCoordinates}
        dropoffCoordinates = {dropoffCoordinates}
      />
      <RideContainer>
        Ride selector
        Confirm Button
        {pickupCoordinates}
        {dropoffCoordinates}
      </RideContainer>
    </Wrapper>
  )
}


export default Confirm

const RideContainer = tw.div`
flex-1 
`
const Wrapper = tw.div`
flex h-screen flex-col
`
