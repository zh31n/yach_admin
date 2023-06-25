import React from 'react';
import s from './YachtCard.module.scss'
import Api from "../../api/api";
import {useCookies} from "react-cookie";

const YachtCard = ({townId, id, setCity, name}) => {

    const [cookies] = useCookies();

    const onClickDelete = (e) => {
        const token = cookies.token;
        e.preventDefault()
        Api.deleteYacht(id, token).then(res => {
            Api.getTown(townId).then(res => {
                setCity(res.data);
            })
        })
    }


    return (
        <div className={s.card}>
            <div className={s.name}>{name}</div>
            <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
                <div onClick={onClickDelete} className={s.btn}>Удалить</div>
            </div>
        </div>
    );
};

export default YachtCard;