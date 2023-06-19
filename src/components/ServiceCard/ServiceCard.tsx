import React from 'react';
import s from './ServiceCard.module.scss'

const ServiceCard = (props: any) => {


    const onClickChange = (e) => {
        e.preventDefault();
        props.setServiceName(props.name);
        props.setModal(true);
    }

    return (
        <div className={s.card}>
            <div className={s.name}>{props.name}</div>
            <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
                <div onClick={onClickChange} className={s.btn}>Изменить</div>
            </div>
        </div>
    );
};

export default ServiceCard;