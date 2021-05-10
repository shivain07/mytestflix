import React from 'react'
import { NavLink} from 'react-router-dom';
import Contact from './Contact'
import About from './About'
import Search from './Search'


function NavB(){

    return(
        <>
        <div className='navbarLinks'>

<NavLink className="link" exact activeClassName='active' to='/About'>About</NavLink>
<NavLink className="link" exact activeClassName='active' to='/'>Home</NavLink>
<NavLink className="link" exact activeClassName='active' to='/Contact'>Contact</NavLink>
<NavLink className="link" exact activeClassName='active' to='/Search'>Search</NavLink>

</div>


        </>
    )

}



export default NavB;