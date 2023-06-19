import React from 'react';
import s from './YachtCard.module.scss'
import {NavLink} from "react-router-dom";
import Api from "../../api/api";
import {useCookies} from "react-cookie";

const YachtCard = ({townId, ...props}) => {

    const [cookies] = useCookies();

    const onClickDelete = (e) => {
        const token = cookies.token;
        e.preventDefault()
        Api.deleteYacht(props.id, token).then(res => {
            Api.getTown(townId).then(res => {
                props.setCity(res.data);
            })
        })
    }


    return (
        <NavLink to={'/yachts/' + props.id} className={s.card}>
            <div className={s.name}>{props.name}</div>
            <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
                <div onClick={onClickDelete} className={s.btn}>Удалить</div>
            </div>
        </NavLink>
    );
};

export default YachtCard;