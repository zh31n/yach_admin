import React, {useState} from 'react';
import s from './YachtCard.module.scss'
import Api from "../../api/api";
import {useCookies} from "react-cookie";

const YachtCard = ({townId, id, setCity, name,setActive,setData,data,setYachts}) => {

    const [cookies] = useCookies();
    const onClickChange = () => {
        setData(data);
        setActive(true)
    }

    const onClickDelete = (e) => {
        const token = cookies.token;
        e.preventDefault()
        Api.deleteYacht(id, token).then(res => {
            Api.getYachts().then(res => {
                setYachts(res.data);
            })
        })
    }


    return (
        <>
            <div className={s.card}>
                <div className={s.name}>{name}</div>
                <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
                    <div onClick={onClickChange} className={s.btn}>Изменить</div>
                    <div onClick={onClickDelete} className={s.btn}>Удалить</div>
                </div>
            </div>
        </>

    );
};

export default YachtCard;