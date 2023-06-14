import React from 'react';
import s from './ServiceCard.module.scss'

const ServiceCard = (props: any) => {

    const onClickDelete = (e) => {
        e.preventDefault()
    }
    const onClickChange = (e) => {
        e.preventDefault()
    }

    return (
        <div className={s.card}>
            <div className={s.name}>{props.name}</div>
            <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
                <div onClick={onClickDelete} className={s.btn}>Удалить</div>
                <div onClick={onClickChange} className={s.btn}>Изменить</div>
            </div>
        </div>
    );
};

export default ServiceCard;