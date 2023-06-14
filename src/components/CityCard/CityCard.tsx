import React from 'react';
import s from './CityCard.module.scss'
import {NavLink} from "react-router-dom";

const CityCard = (props: any) => {

    const onClickDelete = (e) => {
        e.preventDefault()
    }
    const onClickChange = (e) => {
        e.preventDefault()
    }

    return (
        <NavLink to={'/cities/' + props.id} className={s.card}>
            <div className={s.name}>{props.name}</div>
            <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
                <div onClick={onClickDelete} className={s.btn}>Удалить</div>
                <div onClick={onClickChange} className={s.btn}>Изменить</div>
            </div>
        </NavLink>
    );
};

export default CityCard;