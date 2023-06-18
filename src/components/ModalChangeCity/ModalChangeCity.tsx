import React, {useState} from 'react';
import s from './ModalChangeCity.module.scss'
import CustomInput from "../CustomInput/CustomInput";
import Api from "../../api/api";

const ModalChangeCity = (props: any) => {

    let [city, setCity] = useState('');
    let [country, setCountry] = useState('');
    let [services, setServices] = useState([]);
    let [err, setErr] = useState([]);

    city = props.currentCity.name;
    country = props.currentCity.country;

    const data = [
        {text: 'Город', type: 'text', value: city, setValue: setCity, readonly: true, id: 1},
        {text: 'Страна', type: 'text', value: country, setValue: setCountry, readonly: true, id: 2},
        {text: 'Услуги', type: 'text', value: services, setValue: setServices, readonly: false, id: 3}
    ];

    const inputItems = data.map(i => <CustomInput text={i.text} readonly={i.readonly} type={i.type} value={i.value}
                                                  setValue={i.setValue} key={i.id}/>)

    const changeCity = () => {
        Api.changeTown(city, country, services).then(res => props.setActive(false))

    };

    return (
        <div className={s.modal} onClick={() => props.setActive(false)}>
            <div className={s.modalInner} onClick={(e) => e.stopPropagation()}>
                <form className={s.inpCont}>
                    <div>
                        {inputItems}
                    </div>
                </form>
                <button onClick={changeCity} className={s.btn}>Изменить</button>
            </div>
        </div>
    );


};

export default ModalChangeCity;