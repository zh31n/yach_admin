import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import s from './City.module.scss'
import YachtCard from "../../components/YachtCard/YachtCard";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import ModalAddYacht from "../../components/ModalAddYacht/ModalAddYacht";
import ModalAddService from "../../components/ModalAddService/ModalAddService";
import axios from "axios";

const City = (props: any) => {

    let yachtItems = props.cityPage.yachts.map(y => <YachtCard name={y.name} key={y.id} id={y.id}/>);
    let servicesItems = props.cityPage.services.map(s => <ServiceCard key={s.id} name={s.name}/>);

    let [modalYacht, setModalYacht] = useState(false);
    let [modalService, setModalService] = useState(false);
    const [city, setCity] = useState([])


    return (
        <div className={s.container}>
            {modalYacht && <ModalAddYacht setActive={setModalYacht}/>}
            {modalService && <ModalAddService setActive={setModalService}/>}
            <div className={s.coord}>{props.cityPage.city}, {props.cityPage.country}</div>
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

let mstp = (state) => ({
    cityPage: state.cities.cityPage
})

export default connect(mstp, {})(City);