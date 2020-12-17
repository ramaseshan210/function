
import { Button } from '@material-ui/core';
import React,{useState} from 'react'
import Select from 'react-select';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Spinner from 'react-bootstrap/Spinner'
import {BounceLoader} from 'react-spinners'


function Ram() {

    const options = [
        {value:'red',label: 'red'},
        {value:'yellow',label:'yellow'},
        {value:'green',label:'green'},
    ];

    const [colour,setColour] = useState("");



    const hindle=(event)=>{
    
        console.log(event.value);
        setColour(event.value);
            

        
        console.log("runnning")
    }

    return (
        <div>
          
           <Select options={options} onChange={hindle}/>
           {colour}
          <Button>hello</Button>
            
            <button type="text">hello </button>
        </div>
    )
}

export default Ram
