import React, { useState, useEffect } from 'react'
import '../sass/main.scss'
import Cards from './Cards'
import aaa from '../images/00.JPG'
import bbb from '../images/22.JPG'
import ccc from '../images/33.JPG'
import ddd from '../images/111.jpg'
import eee from '../images/21.JPG'
import fef from '../images/12.jpg'
import Nav from './Nav'



function Home() {

    const [data,setData] = useState('');

    useEffect(() => {
        setData([
            {
                name: 'Dolpo',
                image: aaa,
                backTitle: 'This is backside 1'
            },
            {
                name: 'Himalaya',
                image: bbb,
                backTitle: 'This is backside 1'
            },
            {
                name: 'Phoksundo',
                image: ccc,
                backTitle: 'This is backside 2'
            },
            {
                name: 'Bridge',
                image: ddd,
                backTitle: 'This is backside 3'
            },
            {
                name: 'Phoksundo',
                image: eee,
                backTitle: 'This is backside 4'
            },
            {
                name: 'SKY',
                image: fef,
                backTitle: 'This is backside 5'
            },
        ])
    }, [])

    return (
        <>
        <Nav/>
        <div className = "Home">
            <header className= "header"> 
               
                <div className= "header-container">
                    <h1> DOLPOOO </h1>
                    <p>A hidden treasure in the land of Nepal </p>
                    
                    <a href= '#' class = 'btn'>Discover Yourself !!!</a>
                </div>
            </header>


            <section className="section"> 
                
                <h2 className= "Topic"> BEAUTIFUL PLACES</h2>
                <div className= "cards">
                    {/* <Cards backTitle= "This is backside 1" name="JOURNEY" image= {aaa} projLink = "" />
                    <Cards backTitle= "This is backside 2" name= "TRAIL" image= {bbb} />
                    <Cards backTitle= "This is backside 3" name = "MOUNTAINS " image= {ccc} />
                    <Cards backTitle= "This is backside 4" name = "BRIDGE" image={ddd} />
                    <Cards backTitle= "This is backside 5" name = "LAkE" image={eee} />
                    <Cards backTitle= "This is backside 6" name = "SKY " image={fef} /> */}
                    {   
                        Array.isArray(data) ?
                        data.map((d) => (
                        <Cards backTitle= {d.backTitle} name = {d.name} image={d.image} />

                        ))
                        : ''
                    }
                </div>
            </section>

            
        </div>
        <footer >
        <div>Contact no: 9845081876</div>
        <div> ENJOY!!!!! </div>
        <div>@Copyright: 2021</div>
           </footer>
           
            
        </>
    )
}

export default Home
