
import React, { useState } from 'react';
import "./MobileBtn.css";
const MobileBtn = () => {
    const [value , setValue] = useState(100);
    const betteryDown = () =>{
        if(value>0){
            setValue(value-10)
        }
         
    }

    return (
        <div className='mobileContainer'>
            <h3>Charge : {value} <span>%</span> </h3>
            <button onClick={betteryDown}>Down Bettery</button>
        </div>
    );
};

export default MobileBtn;