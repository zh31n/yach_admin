import React, {useState} from 'react';
import {connect} from "react-redux";
import s from './City.module.scss'
import YachtCard from "../../components/YachtCard/YachtCard";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import ModalAddYacht from "../../components/ModalAddYacht/ModalAddYacht";
import ModalAddService from "../../components/ModalAddService/ModalAddService";

const City = (props: any) => {

    let yachtItems = props.cityPage.yachts.map(y => <YachtCard name={y.name} key={y.id} id={y.id}/>);
    let servicesItems = props.cityPage.services.map(s => <ServiceCard key={s.id} name={s.name} />);

    let [modalYacht,setModalYacht] = useState(false);
    let [modalService,setModalService] = useState(false);

    let state = {
        CitiesItems: [
            {name: 'Ейск', id: 1},
            {name: 'Ярославль', id: 2},
            {name: 'Воронеж', id: 3},
            {name: 'Адлер', id: 4},
            {name: 'Новгород', id: 5}
        ],
        cityPage: {
            city: 'Воронеж',
            country: 'Россия',
            services: [
                {name: 'катание не хуе', id: 1},
                {name: 'gay sex', id: 2},
                {name: 'fisting ass', id: 3},
                {name: 'suction', id: 4},
            ],
            yachts: [
                {name: 'Porshe', id: 1},
                {name: 'Lamba', id: 2},
                {name: 'Lada', id: 3},
                {name: 'Slave', id: 4},
                {name: 'Fisting', id: 5},
            ]
        }
    };

    return (
        <div className={s.container}>
            { modalYacht && <ModalAddYacht setActive={setModalYacht} /> }
            { modalService && <ModalAddService setActive={setModalService} /> }
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