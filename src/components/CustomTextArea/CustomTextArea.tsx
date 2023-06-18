import React from 'react';
import s from './CustomTextArea.module.scss';

const CustomTextArea = (props: any) => {

    const onchange = (e) => {
        props.setValue(e.target.value)
    }

    return (
        <div className={s.container}>
            <span className={s.textInp}>{props.text}*</span>
            <div>
                <textarea className={s.InpSt} readOnly={props.readonly} type={props.type} value={props.value}
                          onChange={onchange} placeholder={props.placeholder}/>
            </div>
        </div>
    );
};

export default CustomTextArea;