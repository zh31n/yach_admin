import React, {useState} from 'react';
import s from './ModalChangeCity.module.scss'
import CustomInput from "../CustomInput/CustomInput";
import Api from "../../api/api";
import {useCookies} from "react-cookie";

const ModalChangeCity = (props: any) => {

    let [city, setCity] = useState(props.currentCity.name);
    let [country, setCountry] = useState(props.currentCity.country);
    let [err, setErr] = useState([]);

    const [cookies] = useCookies()
    const token = cookies.token;

    const id = props.currentCity.id;

    const data = [
        {text: 'Город', type: 'text', value: city, setValue: setCity, id: 1},
        {text: 'Страна', type: 'text', value: country, setValue: setCountry, id: 2},
    ];

    const inputItems = data.map(i => <CustomInput text={i.text} type={i.type} value={i.value}
                                                  setValue={i.setValue} key={i.id}/>)

    const changeCity = () => {
        Api.changeTown(id,city,country,token).then(res => {
            props.setActive(false)
            Api.getTowns().then(res => {
                props.setSities(res.data)
            })
        })
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