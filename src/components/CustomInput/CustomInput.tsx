import React from 'react';
import s from './CustomInput.module.scss';

const CustomInput = (props:any) => {
    return (
        <div className={s.container}>
            <span className={s.textInp}>{props.text}*</span>
            <div className="">
                <input className={s.InpSt} type={props.type} placeholder={props.placeholder}/>
            </div>
        </div>
    );
};

export default CustomInput;