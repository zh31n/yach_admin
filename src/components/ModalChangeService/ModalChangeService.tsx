import React, {useEffect, useRef, useState} from 'react';
import s from "./ModalChangeService.module.scss";
import CustomTextArea from "../CustomTextArea/CustomTextArea";
import Api from "../../api/api";
import axios from "axios";
import {useCookies} from "react-cookie";



const ModalChangeService = (props: any) => {
    const ref = useRef();
    const [desc, setDesc] = useState();
    let [file, setFile] = useState();
    const [id, setId] = useState();
    const town = props.townName;
    const serviceName = props.serviceName;
    const [cookies] = useCookies();
    const token = cookies.token;
    // const [name]
    const onChangeInput = (e) => setFile(e.target.files[0]);

    const changeService = () => {
        if (file) {
            const token = cookies.token;
            const formData = new FormData();
            formData.append('file', file);
            axios.post('http://45.12.73.221:80/img', formData, {headers: {"Content-Type": "multipart/form-data"}}).then(res => {
                    const imgUrl = res.data.urlfile;
                    const des = desc;

                    Api.changeService(token, imgUrl, des, id).then(res => {
                        console.log(res)
                        props.setActive(false);
                    })
                }
            )
        } else {
            const imgUrl = '';
            const des = desc;
            Api.changeService(token, imgUrl, des, id).then(res => props.setActive(false))
        }

    }

    useEffect(() => {
        Api.setInfoService(town, serviceName).then(res => {
            setDesc(res.data.des);
            setId(res.data._id);
        })
    }, [setDesc,setId])

    return (
        <div className={s.modal} onClick={() => props.setActive(false)}>
            <div className={s.modalInner} onClick={(e) => e.stopPropagation()}>
                <form>
                    <CustomTextArea text={'Описание услуги'} setValue={setDesc} value={desc} type={'text'}/>
                    <input ref={ref} type={'file'} onChange={onChangeInput} style={{display: 'none'}}/>
                </form>
                <button className={s.btn} onClick={() => ref.current.click()}
                        style={{width: '150px', marginBottom: '10px'}}>
                    {file ? 'Изменить фото' : 'Добавить фото'}
                </button>
                <button onClick={changeService} className={s.btn}>Изменить</button>
            </div>
        </div>
    );
};

export default ModalChangeService;