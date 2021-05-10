import React, { useState } from 'react'
import Card from './Card'
import Netflix from './NetflixData'

function Blocks(props) {
  
    
    
 


    return (
        <>
            <div className='net-category' >

                <h1>{props.heading}</h1>
                <div className='card-parent'>


                    {Netflix.map((val, index) => {
if (val.type===props.heading){
                        return (
                            <Card
                                key={index}
                                image={val.image}
                                show={val.show} />

                        )
                        }

                    })

                    }

                </div>
            </div>
        </>
    )


}



export default Blocks;