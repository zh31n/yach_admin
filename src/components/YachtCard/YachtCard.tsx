import React from 'react';
import s from './YachtCard.module.scss'
import {NavLink} from "react-router-dom";

const YachtCard = (props: any) => {

    const onClickDelete = (e) => {
        e.preventDefault()
    }
    const onClickChange = (e) => {
        e.preventDefault()
    }

    return (
        <NavLink to={'/yachts/' + props.id} className={s.card}>
            <div className={s.name}>{props.name}</div>
            <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
                <div onClick={onClickDelete} className={s.btn}>Удалить</div>
                <div onClick={onClickChange} className={s.btn}>Изменить</div>
            </div>
        </NavLink>
    );
};

export default YachtCard;