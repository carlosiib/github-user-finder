import React, { Fragment } from 'react'
import spinner from './spinner.gif';

const Snipper = () => {
    return (
        <Fragment>
            <img 
                src={spinner} 
                alt='Loading...' 
                style={sppinerStyle}>
            </img>
        </Fragment>
    )
}
const sppinerStyle = {
    width: '200px',
    margin: 'auto',
    display: 'block'
}


export default Snipper
