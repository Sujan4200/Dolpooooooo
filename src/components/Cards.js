import React, { useEffect, useState } from 'react'



function Cards({name, image, backTitle}) {
    
    const [modal, setModal] = useState(false);
    // const [classname, setClassname] = useState('card__modal');


    // useEffect(() => {
    //     if(!modal) {
    //         setClassname('card__modal--none')
    //     }else {
    //         setClassname('card__modal');
    //     }
    // },[modal])

    return (
        <>
            <div className= "card" onClick= {() => setModal(true)}>
                <div className="card-inner">
                    <div className="card-front">
                <img className= "card-img" src= {image}/>
                <p className= "card-title">{name}</p>
                </div>
                <div className="card-back">
                    <h1 className="card-back-content"> {backTitle}</h1>
                    <p classname="card-back-content">music and adventure</p>
                    <p className="card-back-content ">we love dolpa</p>
                </div>
            </div>  
            </div>

            <div className={modal ? 'card__modal' : 'card__modal--none'} >
                <div className="card__modal--backdrop" onClick= {() => setModal(false)}></div>
                <img className= "card__modal--img" src= {image} />
                <span className= "card__modal--cross" onClick= {() => setModal(false)}>X</span>
            </div>
        </>
    )
}

export default Cards
