import { useEffect, useState } from 'react'
import React from 'react'
import tw from 'tailwind-styled-components'
import Map from './components/Map'
import { useRouter } from 'next/router'
import RideSelector from './components/RideSelector'

const Confirm = () => {

  const router = useRouter();
  const { pickup, dropoff } = router.query

  console.log("Pickup: ", pickup);
  console.log("dropoff: ", dropoff);


  const [pickupCoordinates, setPickupCoordinates] = useState();
  const [dropoffCoordinates, setDropoffCoordinates] = useState();

  const getPickUpCoordinates = (pickup) => {
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

  const getDropOffCoordinates = (dropoff) => {
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
    getPickUpCoordinates(pickup);
    getDropOffCoordinates(dropoff);
  }, [pickup, dropoff])

  console.log("pickupCoordinates: " + pickupCoordinates)
  console.log("dropoffCoordinates: " + dropoffCoordinates)

  return (
    <Wrapper>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />
      <RideContainer>
        {/* Ride Slector File*/}
        <RideSelector/>
        <ConfirmButtonContainer>
          <ConfirmButton>
          Confirm Button
          </ConfirmButton>
        </ConfirmButtonContainer>
      </RideContainer>
    </Wrapper>
  )
}


export default Confirm

const ConfirmButton = tw.div`
bg-black text-white my-4 mx-4 py-4 text-center text-xl
`

const ConfirmButtonContainer = tw.div`
border-t-2
`

const RideContainer = tw.div`
flex-1 flex flex-col
`
const Wrapper = tw.div`
flex h-screen flex-col
`
