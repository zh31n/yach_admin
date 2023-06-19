import React from 'react';
import s from './ModalChangeYacht.module.scss'
import CustomInput from "../CustomInput/CustomInput";

const ModalChangeYacht = (props: any) => {

    const data = [
        {text: 'Модель', type: 'text',},
        {text: 'Название', type: 'text'},
        {text: 'Класс', type: 'text'},
        {text: 'Производитель', type: 'text'},
        {text: 'Верфь', type: 'text'},
        {text: 'Год постройки', type: 'text'},
        {text: 'Двигатель', type: 'text'},
        {text: 'Длина', type: 'text'},
        {text: 'Ширина', type: 'text'},
        {text: 'Осадка', type: 'text'},
        {text: 'Скорость', type: 'text'},
        {text: 'Количество кают', type: 'text'},
        {text: 'Пассажировместимость', type: 'text'},
    ];

    const inputItems = data.map(i => <CustomInput text={i.text} type={i.type}/>)

    return (
        <div className={s.modal} onClick={() => props.setActive(false)}>
            <div className={s.modalInner} onClick={(e) => e.stopPropagation()}>
                <form className={s.inpCont}>
                    <div>
                        {inputItems}
                    </div>
                </form>
                <button className={s.btn}>Добавить</button>
            </div>
        </div>
    );


};

export default ModalChangeYacht;