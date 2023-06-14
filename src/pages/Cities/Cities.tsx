import React from 'react';
import s from './Cities.module.scss';
import {connect} from "react-redux";
import CityCard from "../../components/CityCard/CityCard";
import CustomBtn from "../../components/CustomBtn/CustomBtn";

const Cities = (props:any) => {

    const CityItems = props.cities.map(c => <CityCard name={c.name} id={c.id}/>);

    return (
        <div className={s.cities}>
            <h3 className={s.title}>Города</h3>
            <div className={s.cityCont}>
                {CityItems}
                {CityItems}
            </div>
            <div className={s.btnCont}>
                <CustomBtn title={'Добавить город'}/>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    cities:state.cities.CitiesItems
});

export default connect(mapStateToProps,{})(Cities);