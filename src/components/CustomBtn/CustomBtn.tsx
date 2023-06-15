import React from 'react';
import s from './CustomBtn.module.scss'

const CustomBtn = (props:any) => {
    return (
        <div onClick={() => props.setActive(true)} className={s.btn}>{props.title}</div>
    );
};

export default CustomBtn;