import React, { useState } from 'react'
import ButtonComponent from './ButtonComponent'
import Heading from './Heading'
import InfoComponent from './InfoComponent'

export default function Home() {


  const [counter1,setCounter1] = useState(0)
  const [counter2,setCounter2] = useState(100)


  const increment1 = () => {
    setCounter1(counter1 + 1)
  }

  const increment2 = () => {
    setCounter2(counter2 + 1)
  }

  return (
    <>
        <Heading/>
        <InfoComponent title="Counter1 :" value={counter1}/>
        <ButtonComponent title="Increment 1" eventHandler={increment1}/>
        <InfoComponent title="Counter2 :" value={counter2}/>
        <ButtonComponent title="Increment 2" eventHandler={increment2}/>
    </>
  )
}
