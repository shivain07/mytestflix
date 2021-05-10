import React from 'react'

function Infobox(props){
return(
<>
<div className='pagecontainer'>
    <h1>{props.heading}</h1>
<div className='pagecontent'>
   
    {/* <div> */}
    <h3 style={{color:'azure',textAlign:'center',width:'70vw'}}>{props.content}</h3>
    {/* </div> */}
    
     <img src={props.image} alt="images" />

</div>

    </div>
</>



)
}

export default Infobox;