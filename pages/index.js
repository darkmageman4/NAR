import { useEffect } from 'react';
import tw from 'tailwind-styled-components'
import Map from './components/Map';
import mapboxgl from "!mapbox-gl";
import './assests/terrorist.jpeg'
import Link from 'next/link'

export default function Home() {

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/navigation-day-v1', 
      center: [-92.045303, 30.291835], // starting position [lng, lat]
      zoom: 3 // starting zoom
    });
  });


  return (
    <Wrapper>
      <Map/>
      <ActionItems>
        {/* Header */}
        <Header>
        <Custologo src='./components/NAR.png' alt='CustoImg'/>
          <Profile>
            <Name>Money Man</Name>
            <UserImage src='./components/terrorist.jpeg'/>
          </Profile>
        </Header>
        {/* Action Buttons */}
        <ActionButtons>
          <Link href='/search'>
            <ActionButton>
              <ActionButtonImage src="./components/car.jpeg" />
                Ride
            </ActionButton>
          </Link>   
          <ActionButton>
            <ActionButtonImage src="./components/car.jpeg" />
              two wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="./components/reserve.jpeg" />
            reserve
          </ActionButton>
        </ActionButtons>
        {/* Input Button */}
        <InputButton>
        Where to?
        </InputButton>
        </ActionItems>
    </Wrapper>
  );
}

const InputButton = tw.div`
h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8
`

const ActionButtonImage = tw.img`
h-3/5
`

const ActionButton = tw.div`
bg-red-200 flex-1 m-1 h-32 items-center flex-column justify-center rounded-lg transform hover:scale-105 transition text-xl
`

const ActionButtons = tw.div`
flex 
`

const Name = tw.div`
mr-4 w-20 text-small
`
const UserImage = tw.img`
h-12 w-12 rounded-full border border-red-200 p-px
`

const Profile = tw.div`
flex items-center
`

const Custologo = tw.img`
h-28
`

const Wrapper = tw.div`
flex flex-col h-screen
`

const ActionItems = tw.div`
flex-1 p-4
`

const Header = tw.div`
flex justify-between items-center
`