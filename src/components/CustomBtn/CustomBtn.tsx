import React from 'react';
import s from './CustomBtn.module.scss'

const CustomBtn = (props:any) => {
    return (
        <div className={s.btn}>{props.title}</div>
    );
};

export default CustomBtn;