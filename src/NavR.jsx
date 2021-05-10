import React from 'react';
import Contact from './Contact'
import About from './About'
import { NavLink, Route, Switch } from 'react-router-dom';
import Home from './Home'
import NavB from './NavB'
import Search from './Search'





function NavR(){


return(

    <>
    {/* <h1>this is nav</h1> */}
    <NavB/>
    <Switch>
                <Route path="/" component={Home} exact />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/search" component={Search} />
                <Route component={Home} />
            </Switch>




    </>
)

}


export default NavR;