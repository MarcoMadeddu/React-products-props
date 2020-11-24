import React from "react"


export default function Product (props){
    
    return (
        <div> 
            <h1>Name: {props.name}</h1>
            <h3>Price: {props.price}</h3>
            <p>Description: {props.description}</p>
        </div>
    )
}