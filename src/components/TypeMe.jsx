import React, {useState} from "react";
export default function TypeMe(){
    const [isOn,setIsOn]= useState(false);
    function Focus(){
        setIsOn(true);
    }
    return(
        <div>
            <input type="text" onBlur={Focus} />
            {isOn && <p style={{color:"red"}}>Please type in here!</p>}
        </div>
    );
}