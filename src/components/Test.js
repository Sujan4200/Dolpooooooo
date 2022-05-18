import React, { useEffect, useState } from 'react'
import DispCountry from './DispCountry'

function Test() {

    const [value,setValue] = useState(0)
    const [num,setNum] = useState(0);

    const addHandler = (n) => {
        // if(value > 500) {
        //     alert("Maximum capacity reached! please come back later.")
        //     setValue(500)
        // }else {
        //     let tempNumber = value;
        //     let sum = parseInt(tempNumber)+parseInt(n)
        //     setValue(sum)
        // }


        if(isNaN(num)) {
            alert("Enter number you jackass!")
        }else {
            let tempNumber = value;
            let sum = parseInt(tempNumber)+parseInt(n)
            setValue(sum)
        }

     
    }
    
    const subHandler = (n) => {
        if(isNaN(num)) {
            alert("Enter number you jackass!")
        }else {
            let tempNumber = value;
            let diff = parseInt(tempNumber)-parseInt(n)
            setValue(diff)
        }
    }

    const onChangeHandler = (inputValue) => {

        if(!isNaN(inputValue)){
            setNum(inputValue)
        }

    }

    useEffect(() => {
        if(value < 0){
            alert("Occupancy cannot be negative or did people die??")
            setValue(0)
        }

        if(num > 1000) {
            alert("You cannot enroll 100 peoples at once. Please be patient!")
            setNum(0)
        }
    },[value, num])

    return (
        <>
            <input type="text" value={num} placeholder='Enter number you want to subtract' onChange={(e) => onChangeHandler(e.target.value) } style={{width: '100%'}}  /> <br/>

            <button onClick= {() => addHandler(num)}>Add</button> <br/>
            <button onClick= {() => subHandler(num)}>Subtract</button> <br/>
            Occupancy: {value}
        </>
    )
}

export default Test
