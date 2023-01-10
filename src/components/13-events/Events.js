import React from 'react'

const Events = () => {

    const sayHello = () => { 
        alert("Hello")
     }
     const sayHello2 = (name) => { 
alert(`Hello ${name}`)

     }



  return (

    <div> 
        <div onClick={sayHello}>sayHello 1 </div>
        <div onClick={()=> sayHello2 ("Ali") } > Say Hello2</div>
     </div>
   



   
  )
}

export default Events