import React, {useRef, useState} from 'react';
import s from './ModalChangeYacht.module.scss'
import CustomInput from "../CustomInput/CustomInput";
import Api from "../../api/api";
import axios from "axios";
import {useCookies} from "react-cookie";
import {PhotoItem} from "../ModalAddYacht/ModalAddYacht";

const ModalChangeYacht = (props: any) => {

    const yacht = props.yacht;
    const [file, setFile] = useState([...yacht.image]);
    const [model, setModel] = useState(yacht.spec.model);
    const [name, setName] = useState(yacht.spec.name);
    const [classing, setClassing] = useState(yacht.spec.class);
    const [maker, setMaker] = useState(yacht.spec.manufacturer);
    const [verf, setVerf] = useState(yacht.spec.shipyard);
    const [year, setYear] = useState(yacht.spec.year);
    const [engine, setEngine] = useState(yacht.spec.engine);
    const [length, setLength] = useState(yacht.spec.length);
    const [wide, setWide] = useState(yacht.spec.width);
    const [osadka, setOsadka] = useState(yacht.spec.draught);
    const [speed, setSpeed] = useState(yacht.spec.spead);
    const [count, setCount] = useState(yacht.spec.number_of_cabins);
    const [guys, setGuys] = useState(yacht.spec.passenger_capacity);
    const [desc, setDesc] = useState(yacht.description);
    const [price, setPrice] = useState(yacht.price);
    const [cookies] = useCookies();

    const data = [
        {text: 'Модель', type: 'text', setValue: setModel, value: model},
        {text: 'Название', type: 'text', setValue: setName, value: name},
        {text: 'Класс', type: 'text', setValue: setClassing, value: classing},
        {text: 'Производитель', type: 'text', setValue: setMaker, value: maker},
        {text: 'Верфь', type: 'text', setValue: setVerf, value: verf},
        {text: 'Год постройки', type: 'number', setValue: setYear, value: year},
        {text: 'Двигатель', type: 'text', setValue: setEngine, value: engine},
        {text: 'Длина', type: 'number', setValue: setLength, value: length},
        {text: 'Ширина', type: 'number', setValue: setWide, value: wide},
        {text: 'Осадка', type: 'number', setValue: setOsadka, value: osadka},
        {text: 'Скорость', type: 'number', setValue: setSpeed, value: speed},
        {text: 'Цена', type: 'number', setValue: setPrice, value: price},
        {text: 'Количество кают', type: 'number', setValue: setCount, value: count},
        {text: 'Пассажировместимость', type: 'number', setValue: setGuys, value: guys},
        {text: 'Описание', type: 'text', setValue: setDesc, value: desc},
    ];
    const ref = useRef();


    const inputItems = data.map(i => <CustomInput text={i.text} type={i.type} setValue={i.setValue} value={i.value}/>)
    const photos = file.map(p => <PhotoItem img={p}/>)

    const onChangeInput = (e) => {
        let data = new FormData();
        data.append('file', e.target.files[0])
        axios.post('http://62.113.104.182:80/img', data).then(res => {
            setFile(prev => [...prev, res.data.urlfile])
        })
    };
    const changeYacht = () => {
        const token = cookies.token;
        const data = {
            id: yacht._id,
            imageUrls: file,
            model: model,
            name: name,
            manufacturer: maker,
            clas: classing,
            shipyard: verf,
            year: year,
            engine: engine,
            width: wide,
            length: length,
            draught: osadka,
            spead: speed,
            number_of_cabins: count,
            passenger_capacity: guys,
            description: desc,
            price: price
        }
        Api.changeYacht(data, token).then(res => {
            props.setActive(false)
            Api.getYachts().then(res => {
                props.setYachts(res.data)
            })
        })
    }

    return (
        <div className={s.modal} onClick={() => props.setActive(false)}>
            <div className={s.modalInner} onClick={(e) => e.stopPropagation()}>
                <form className={s.inpCont}>
                    <div>
                        {inputItems}
                        <input ref={ref} onChange={onChangeInput} type={'file'}
                               style={{display: 'none'}}/>
                        <div className={s.photoCont}>
                            {photos}
                        </div>
                    </div>
                </form>
                <button onClick={() => ref.current.click()} className={s.btn}
                        style={{width: '150px', marginBottom: '10px'}}>
                    {file.length !== 0 ? 'Добавить еще фото' : 'Добавить фото'}
                </button>
                <button onClick={changeYacht} className={s.btn}>Изменить</button>
            </div>
        </div>
    );
}


export default ModalChangeYacht;