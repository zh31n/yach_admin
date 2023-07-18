import React from 'react';
import s from './CityCard.module.scss'
import {NavLink} from "react-router-dom";
import Api from "../../api/api";
import {useCookies} from "react-cookie";

const CityCard = (props: any) => {

    const [cookies] = useCookies();

    const onClickDelete = (e) => {
        const token = cookies.token;
        e.preventDefault();
        Api.deleteTown(props.id, token).then(res => {
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
            id: props.id
        });
        props.setActive(true);

    }

    return (
        <NavLink to={'/cities/' + props.id} className={s.card}>
            <div className={s.name}>
                <span>{props.name}</span>,
                {props.country}
            </div>
            <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
                <div onClick={onClickChange} className={s.btn}>Изменить</div>
                <div onClick={onClickDelete} className={s.btn}>Удалить</div>
            </div>
        </NavLink>
    );
};

export default CityCard;