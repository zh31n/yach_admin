import React, {useState} from 'react';
import {connect} from "react-redux";
import s from './City.module.scss'
import YachtCard from "../../components/YachtCard/YachtCard";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import cx from 'classnames';

const City = (props: any) => {

    let yachtItems = props.cityPage.yachts.map(y => <YachtCard name={y.name} key={y.id} id={y.id}/>);
    let servicesItems = props.cityPage.services.map(s => <ServiceCard key={s.id} name={s.name} />);

    let [modalYach,setModalYach] = useState(false);

    return (
        <div className={s.container}>
            <div className={s.coord}>{props.cityPage.city}, {props.cityPage.country}</div>
            <div className={s.content}>
                <div className={s.seccont}>
                    <h3 className={s.titleYacht}>Яхты</h3>
                    <div className={s.yCont}>
                        {yachtItems}
                    </div>
                    <button className={s.addYacht}> </button>
                </div>
                <div className={s.seccont}>
                    <h3 className={s.titleYacht}>Услуги</h3>
                    <div className={s.sCont}>
                        {servicesItems}
                    </div>
                </div>
            </div>

        </div>
    );
};

let mstp = (state) => ({
    cityPage: state.cities.cityPage
})

export default connect(mstp, {})(City);