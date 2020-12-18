import Button from './Button'
import React,{useState} from 'react'
import Select from 'react-select';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Spinner from 'react-bootstrap/Spinner'
import {BounceLoader} from 'react-spinners'
import IconButton from '@material-ui/core/IconButton';

function Ram() {

  

    const [colour,setColour] = useState("red");
    const [side,setSide]=useState("right");


    return (
        <div>
            <Button colour={colour} side={side}/>
            
            
           
        </div>
    ) 
}

export default Ram
