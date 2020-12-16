import React,{useState} from 'react'
import './Forms.css'
import Switch from '@material-ui/core/Switch';
import Select from 'react-select';
import { render } from '@testing-library/react';
import { Button } from '@material-ui/core';
import CustomSelect from './CustomSelect'



const options = [ 
    {value:"primary", label: "primary"},
    {value:"secondary",label:"secondary"},
    {value:"default", label:"default"}

]


const styless = {
 select: {
        maxwidth:600,
         width:'100% ',

 }
}



function Use() {


    const [colour,setColour] = useState("");

  
const [state, setstate] = useState({
   
    label:"",
    border: 0,
    check:false,
    load:false ,

}
   );   
 const [condition,setCond] = useState(0);




 
 const hindle=(event)=>{
        
    setColour(

    [event.name]=event.value,
    console.log(event.label));
    console.log(event.value);

 }

  const handle =(event)=>{
    console.log(event.target.value)
  setstate({

    ...state,
     [event.target.name]:event.target.value,
  });
};  
  

 const getValue = (event) => {
            
         
    if(state.check===false)
    { 
      setstate({
          ...state,
          [event.target.name]:true,
        
      });
    }
    else
        {
          
         setstate({
             ...state,
            [event.target.name]:false,
            
         });  
         
         }     
            
        
        };


      const loadValue= (event)=>{
       
            if(state.check===false)
            {
               if(state.load===false)
               {
                   setstate({
                       ...state,
                       [event.target.name]:true,
                     
    
                   });
                  setCond(1);
                   console.log(condition);
                }
                else
                   {
                       setstate({
                           ...state,
                           [event.target.name]:false,
                       });
                       setCond(0);
                       console.log(condition);
                   }
    
                }
                
                else if(state.check===true)
                {
                    if(state.load===true)
                    {
                        setstate({
                            ...state,
                            [event.target.name]:false,
                        });
                        setCond(0);
                    }
                    else if(state.load===false)
                    {
                        setstate({
                            ...state,
                            [event.target.name]:true
                        });
                      setCond(1)
                    }
                }
               };

           const    onChangeInput =(value)=>{
                   console.log(value);

               }

     
        render()       
    return (
        <div>
            <div className="body">

             
     <div className="container">
                    
          <div className="lbn">
                    
                <label>input</label>
                <Select  className="select"  type="text"  name="colour"options={options} onChange={hindle}/></div>
            
                
         <div className="lbn">
                <label>label</label>
                <input type="text"  name="label"value={state.label} onChange={handle}></input></div>

         <div className="lbn">
                <label>border radius</label>
                <input type="number"  name="border"value={state.border} onChange={handle}></input></div>
 
                    
                  
        <div className="lbn">
                <label className="labelClass">loading</label>
                <Switch 
                className="switchMargin"
                color="primary" 
                size ="small"
                checked={state.check}
                name="check"
                onChange={getValue}/>
        </div>
        <div className="lbn">
                <label   className="labelClass">disabled</label>
                <span></span>
                <Switch   
                className="switchMargin"  
                color="primary"
                size ="small"
                checked={state.load}
                name="load"  
                onChange={loadValue}/>
         </div>
            </div>
            <div className="side">
           <Button type="text" variant="contained" color={colour} disabled={ condition===1 ? state.load : state.check} style={{ borderRadius: `${state.border}px`}}>{state.label}</Button>
           
            </div>
        
       
        </div>
        
        </div>
        
    )
}

export default Use
