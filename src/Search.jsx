import React, { useState } from 'react'
import Card from './Card'
import Netflix from './NetflixData'


const Search = () => {

    const[items,setitems]=useState(Netflix)
    const[query,setquery]=useState('')
    const find = (e) => {
        // console.log(e.target.value)
        let data = e.target.value
        // console.log(items)
        
if(data===''|| data === null){
    setquery('Enter in searchbox to search')
    setitems(Netflix)

}
// else if(data !=Netflix.type){
// console.log('no')
// // setitems(Netflix)
// return
// }
else{
     const updateitems= Netflix.filter((cval,ind)=>{
            // if(cval.type!=data){
            // setquery('keyword not matched try another keyword')
            //     console.log('not')
        
            // }
           if(cval.type.includes(data)){

            setquery('results:')
            // console.log(query)
            return (cval.type===data)
                
           }
        
        })
        setitems(updateitems)

    }
}
    

    return (
        <>
<div className='searchdiv'>
            <input className='searchBox' style={{border: '2px solid rgb(20, 16, 231)'}} type="text" placeholder='search here' onChange={(e) => find(e)} />
            </div>
            <h1>{query}</h1>
            <div className='card-parent' style={{display:'flex',flexWrap:'wrap'}}>
            {items.map((val, index) => {

                return (
                    <Card
                        key={index}
                        image={val.image}
                        show={val.show} />

                )


            })

            }
</div>
        </>
    )


}






export default Search;