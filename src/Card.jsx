import React from 'react'

function Card (props){

    return(
<>
{/* <div className='card-parent'> */}
                    <div className='card-tag' >
                        <img src={props.image}
                            alt="image here" />
                        <h2>{props.show}</h2>
                    </div>


                {/* </div> */}
</>


    )
}

export default Card;