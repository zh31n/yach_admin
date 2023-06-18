import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import s from './City.module.scss'
import YachtCard from "../../components/YachtCard/YachtCard";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import ModalAddYacht from "../../components/ModalAddYacht/ModalAddYacht";
import ModalAddService from "../../components/ModalAddService/ModalAddService";
import Api from "../../api/api";
import {Navigate} from "react-router-dom";

import {useParams} from "react-router-dom";

const City = (props: any) => {

    if (!props.isAuth) {
        return <Navigate to={'/'}/>
    }

    let [modalYacht, setModalYacht] = useState(false);
    let [modalService, setModalService] = useState(false);
    const [city, setCity] = useState(null);

    let {userId} = useParams();

    useEffect(() => {

        Api.getTown(userId).then(res => {
            setCity(res.data);
        });
    }, [setCity]);


    if (!city) {
        return <div>Загрузка</div>
    }

    let yachtItems = city.data.yachts.map(y => <YachtCard name={y.spec.name} key={y.id} id={y.id}/>);
    let servicesItems = city.data.services.map(s => <ServiceCard key={s.id} name={s.name}/>);




    return (
        <div className={s.container}>
            {modalYacht && <ModalAddYacht setActive={setModalYacht}/>}
            {modalService && <ModalAddService setActive={setModalService}/>}
            <div className={s.coord}>{city.data.town.name}, {city.data.town.country}</div>
            <div className={s.content}>
                <div className={s.seccont}>
                    <h3 className={s.titleYacht}>Яхты</h3>
                    <div className={s.yCont}>
                        {yachtItems}
                    </div>
                    <button onClick={() => setModalYacht(true)} className={s.addYacht}>+</button>
                </div>
                <div className={s.seccont}>
                    <h3 className={s.titleYacht}>Услуги</h3>
                    <div className={s.sCont}>
                        {servicesItems}
                    </div>
                    <button onClick={() => setModalService(true)} className={s.addYacht}>+</button>
                </div>
            </div>

        </div>
    );
};


export default City;