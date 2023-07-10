import React, {useEffect, useRef, useState} from 'react';
import s from "./ModalChangeCatering.module.scss";
import CustomTextArea from "../CustomTextArea/CustomTextArea";
import Api from "../../api/api";
import axios from "axios";
import {useCookies} from "react-cookie";
import CustomInput from "../CustomInput/CustomInput";


const ModalChangeCatering = (props: any) => {
    const ref = useRef();
    const [desc, setDesc] = useState();
    let [file, setFile] = useState();
    let [name, setName] = useState();
    const [id, setId] = useState();
    const town = props.townName;
    const serviceName = props.serviceName;
    const [cookies] = useCookies();
    const token = cookies.token;
    const onChangeInput = (e) => setFile(e.target.files[0]);
    const [data, setData] = useState([]);

    const addService = () => {
        if (file) {
            const token = cookies.token;
            const formData = new FormData();
            formData.append('file', file);
            axios.post('http://62.113.104.182:80/img', formData, {headers: {"Content-Type": "multipart/form-data"}}).then(res => {
                    const imgUrl = res.data.urlfile;
                    setData(prevState => [...prevState, {title: name, des: desc, image: imgUrl}])
                    setName('')
                    setDesc('')
                    setFile('')
                }
            )
        }
    }

    const changeService = () => {
        Api.changeCatering(id, data).then(res => {
            console.log(res.data)
        })

    }

    useEffect(() => {
        Api.getCatering(props.town).then(res => {
            console.log(res.data)
            setId(res.data._id);
        })
    }, [setId])

    return (
        <div className={s.modal} onClick={() => props.setActive(false)}>
            <div className={s.modalInner} onClick={(e) => e.stopPropagation()}>
                <form>
                    <CustomInput text={'Название'} setValue={setName} value={name} type={'text'}/>
                    <CustomTextArea text={'Описание услуги'} setValue={setDesc} value={desc} type={'text'}/>
                    <input ref={ref} type={'file'} onChange={onChangeInput} style={{display: 'none'}}/>
                </form>
                <button className={s.btn} onClick={() => ref.current.click()}
                        style={{width: '150px', marginBottom: '10px'}}>
                    {file ? 'Изменить фото' : 'Добавить фото'}
                </button>
                <button onClick={addService} style={{width: '150px', marginBottom: '10px'}} className={s.btn}>Добавить
                    еще
                </button>
                <button onClick={changeService} className={s.btn}>Изменить</button>
            </div>
        </div>
    );
};

export default ModalChangeCatering;