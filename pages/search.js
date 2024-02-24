import Link from 'next/link'
import React from 'react'
import tw from 'tailwind-styled-components'

const Search = () => {
  return (
    <Wrapper>
      {/* Button Container */}
      <ButtonContainer>
        <Link href='/'>
        <BackButton src='https://th.bing.com/th/id/OIP.fU4tL3q9XTZ0q2H3LUD5HQAAAA?rs=1&pid=ImgDetMain'/>
        </Link>
      </ButtonContainer>
      {/* Input Container */}
      <InputContainer>
      <FromTwoIcons>
        <Circle src='https://th.bing.com/th/id/R.c9af8efe164f75b2d3aaebf5534892b0?rik=Kgt3pUp0woXM3A&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fcircle-png-circle-png-hd-1600.png&ehk=puEtd%2fOecJlU5MP64BesMRP9JnTIBa%2f1ChZYvpVN7Xc%3d&risl=&pid=ImgRaw&r=0' alt='screw it'/>
        <Line src='https://clipground.com/images/vertical-line-image-png-4.png'/>
        <Square src='https://pngimg.com/uploads/square/square_PNG46.png'/>
      </FromTwoIcons>
      <InputBoxes>
        <Input placeholder='Enter pick up location'/>
        <Input placeholder='Where to?'/>
      </InputBoxes>
      <PluseIcon src='https://pngimg.com/uploads/plus/plus_PNG37.png'/>
      </InputContainer>
      {/* Saved Places*/}
      {/* Confirmed location */}
      <ConfimButtonContainer>
        Confirm Locations
      </ConfimButtonContainer>

      </Wrapper>
  )
}

export default Search

const ConfimButtonContainer=tw.div`
bg-black text-white text-center mt-2 mx-4 py-3 px-4 text-2xl cursor-pointer 
`
const PluseIcon = tw.img`
w-10 h-10 bg-gray-200 rounded-full ml-3
`
//outline-none
const Input = tw.input`
h-10 bg-gray-200 my-2 rounded-2 p-2  border
`
const InputBoxes = tw.div`
flex flex-col flex-1 
`
const Square = tw.img`
h-3
`
const Line = tw.img`
h-10
`

const Circle = tw.img`
h-2.5
`
const FromTwoIcons = tw.div`
w-10 flex flex-col mr-2 items-center
`
const InputContainer = tw.div`
bg-white flex items-center px-4 mb-2
`
const Wrapper = tw.div`
bg-gray-200 h-screen
`
const ButtonContainer = tw.div`
bg-white px-4
`
const BackButton = tw.img`
h-12 cursor-pointer
`
