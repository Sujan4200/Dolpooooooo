import React, { useState } from 'react'

function CombineWords({country}) {

    const [words,setWords] = useState('This is my country: ')

    return (
        <>
            {words + ' ' + country}
        </>
    )
}

export default CombineWords
