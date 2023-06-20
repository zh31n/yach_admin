import React from 'react';
import s from './CityCard.module.scss'
import {NavLink} from "react-router-dom";
import Api from "../../api/api";
import {useCookies} from "react-cookie";

const CityCard = (props: any) => {

    const [cookies, setCookie, removeCookie] = useCookies();

    const onClickDelete = (e) => {
        const token = cookies.token;
        e.preventDefault();
        Api.deleteTown(props.id,token).then(res => {
            Api.getTowns().then(res => {
                props.setCities(res.data)
            })
        })
    }
    const onClickChange = (e) => {
        e.preventDefault();
        props.setCity({
            name: props.name,
            country: props.country,
        });
        props.setActive(true);

    }

    return (
        <NavLink to={'/cities/' + props.id} className={s.card}>
            <div className={s.name}>{props.name},{props.country}</div>
            <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
                <div onClick={onClickDelete} className={s.btn}>Удалить</div>
            </div>
        </NavLink>
    );
};

export default CityCard;