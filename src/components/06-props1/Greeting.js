import React from 'react'
import Welcome from './Welcome';

const Greeting = () => {
  return (
    <div className='greetings'>
        
<h1>Greeting Components</h1>
<Welcome firstName="Ali" lastName="Gel"/>
<Welcome firstName="Ayse" lastName="Gel"/>

    </div>
  )
}

export default Greeting;