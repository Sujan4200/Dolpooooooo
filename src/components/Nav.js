import React, { useEffect, useState } from 'react'

function Nav() {
    
    const[nav, setNav] = useState(false)

    useEffect(() => {
        console.log(nav)
    },[nav])

    window.addEventListener("scroll", function() {
        window.scrollY >100 ? setNav(true) : setNav(false);
    })

    return (
        <nav className ={nav ? "nav nav__sticky" : "nav"}> 
            <div>LOGO</div>
            <div>HOME </div>
            <div>NAVIGATION</div>
        </nav>
    )
}

export default Nav
