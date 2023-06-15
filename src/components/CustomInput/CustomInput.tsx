import React from 'react';
import s from './CustomInput.module.scss';

const CustomInput = (props:any) => {

   const onchange = (e) => {

       props.setValue(e.target.value)
   }

    return (
        <div className={s.container}>
            <span className={s.textInp}>{props.text}*</span>
            <div className="">
                <input className={s.InpSt} type={props.type} value={props.value} onChange={onchange} placeholder={props.placeholder}/>
            </div>
        </div>
    );
};

export default CustomInput;