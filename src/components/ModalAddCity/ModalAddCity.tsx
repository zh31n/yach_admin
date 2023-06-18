import React, {useRef, useState} from 'react';
import s from './ModalAddCity.module.scss'
import CustomInput from "../CustomInput/CustomInput";
import Api from "../../api/api";
import {useCookies} from "react-cookie";

const ModalAddCity = (props: any) => {

    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [cookies, setCookie, removeCookie] = useCookies();
    const [err, setErr] = useState([]);
    const ref = useRef();

    const data = [
        {text: 'Город', type: 'text', value: city, setValue: setCity, id: 1},
        {text: 'Страна', type: 'text', value: country, setValue: setCountry, id: 2},
    ];

    const inputItems = data.map(i => <CustomInput text={i.text} type={i.type} value={i.value} setValue={i.setValue}
                                                  key={i.id}/>)

    const addCity = () => {
        const token = cookies.token;
        Api.addTown(city, country, token).then(res => {
            props.setActive(false);
            Api.getTowns().then(res => {
                    props.setSities(res.data)
                }
            )
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
                <button onClick={addCity} className={s.btn}>Добавить</button>
            </div>
        </div>
    );


};

export default ModalAddCity;