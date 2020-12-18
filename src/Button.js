import React from 'react'
const styles = {
   
}


function Button(props) {

    if(props.colour==="red")
    {
        console.log("blue");
    }

    if(props.side==="left")
    {
        console.log("hello");
    }
    else{
        console.log("hehehe");

    }

    return (
        <div>
        <button  style={{background:props.colour}}>hello aid</button>
        
       
        </div>

    )
}

export default Button
