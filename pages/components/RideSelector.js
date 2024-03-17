import React from 'react'
import tw from 'tailwind-styled-components'
import { carList } from '../data/carList'

const RideSelector = () => {
    return (
        <Wrapper>
            <Title>
                Choose a ride or swipe up for more
            </Title>
            <CarList>
                {carList.map((car,index) => (
                    <Car key={index}>
                        <CarImage src='https://i.ibb.co/cyvcpfF/uberx.png' />
                        <CarDetails>
                            <Service> {car.service} x</Service>
                            <Time>5 minutes away</Time>
                        </CarDetails>
                        <Price>{"$" + (rideDuration * car.multiplier).toFixed(2)}</Price>
                    </Car>
                ))
                }
            </CarList>
        </Wrapper>
    )
}

export default RideSelector

const Price = tw.div`
text-sm
`

const TimeSection = tw.div`
text-xs text-blue-500
`

const CarDetails = tw.div`
flex-1
`

const Service = tw.div`
font-medium
`

const Time = tw.div`
`

const CarImage = tw.img`
h-14 mr-2
`

const Car = tw.div`
flex p-4 items-center
`

const CarList = tw.div`
overflow-y-scroll
`
const Title = tw.div`
text-gray-500 text-center text-xs py-2 border-b
`
const Wrapper = tw.div`
flex-1 bg-red-500 overflow-y-scroll flex flex-col
`