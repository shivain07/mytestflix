import React from 'react'
import Blocks from './Blocks'
import Slider from './Slider'

function Home() {



    return (
        <>
            <h1>this is netflix home</h1>
<Slider/>
<Blocks
heading ='action'

/>
<Blocks
    heading ='comedy' 
     
     />
<Blocks
heading ='romance'

/>
<Blocks
heading ='horror'

/>


        </>



    )
}


export default Home;