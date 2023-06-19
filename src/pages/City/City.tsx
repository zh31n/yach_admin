import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import s from './City.module.scss'
import YachtCard from "../../components/YachtCard/YachtCard";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import ModalAddYacht from "../../components/ModalAddYacht/ModalAddYacht";
import ModalChangeService from "../../components/ModalChangeService/ModalChangeService";
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
    const [serviceName,setServiceName] = useState('');

    let {townId} = useParams();

    useEffect(() => {
        Api.getTown(townId).then(res => {
            setCity(res.data);
        });
    }, [setCity]);


    if (!city) {
        return <div>Загрузка</div>
    }

    let yachtItems = city.data.yachts.map(y => <YachtCard  name={y.spec.name} key={y.id} id={y.id} townId={townId} setCity={setCity}/>);
    let servicesItems = city.data.services.map(s => <ServiceCard key={s._id} id={s._id} name={s.name} setServiceName={setServiceName} setModal={setModalService}/>);


    return (
        <div className={s.container}>
            {modalYacht && <ModalAddYacht city={city.data.town} setActive={setModalYacht} setCity={setCity} townId={townId} />}
            {modalService && <ModalChangeService setActive={setModalService} townName={city.data.town.name}  serviceName={serviceName}/>}
            <div className={s.coord}>{city.data.town.name}, {city.data.town.country}</div>
            <div className={s.content}>
                <div className={s.seccont}>
                    <h3 className={s.titleYacht}>Яхты</h3>
                    <div className={s.yCont}>
                        {!yachtItems ? 'Яхт нет' : yachtItems}
                    </div>
                    <button onClick={() => setModalYacht(true)} className={s.addYacht}>+</button>
                </div>
                <div className={s.seccont}>
                    <h3 className={s.titleYacht}>Услуги</h3>
                    <div className={s.sCont}>
                        {servicesItems}
                    </div>
                </div>
            </div>
            <div className={s.about}>
                {city.data.about.text}
            </div>
        </div>
    );
};


export default City;