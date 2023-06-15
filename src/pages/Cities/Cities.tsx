import React, {useEffect, useState} from 'react';
import s from './Cities.module.scss';
import {connect} from "react-redux";
import CityCard from "../../components/CityCard/CityCard";
import CustomBtn from "../../components/CustomBtn/CustomBtn";
import Api from "../../api/api";
import ModalAddCity from "../../components/ModalAddCity/ModalAddCity";

const Cities = (props: any) => {

        const [cities, setSities] = useState([]);
        const [modalActive, setModalActive] = useState(false);

        useEffect(() => {
            if (cities.length === 0) {
                Api.getTowns().then(res => {
                    setSities(res.data)
                })
            }
        },[cities])




        const CityItems = cities.map(c => <CityCard name={c.name} id={c._id} key={c._id}/>);

        return (
            <div className={s.cities}>
                {modalActive && <ModalAddCity setActive={setModalActive} setSities={setSities}/>}
                <h3 className={s.title}>Города</h3>
                <div className={s.cityCont}>
                    {cities.length == 0 ? <span>Городов нет</span> : CityItems}
                </div>
                <div className={s.btnCont}>
                    <CustomBtn setActive={setModalActive} title={'Добавить город'}/>
                </div>
            </div>
        );
    }
;

const mapStateToProps = (state) => ({
    cities: state.cities.CitiesItems
});

export default connect(mapStateToProps, {})(Cities);