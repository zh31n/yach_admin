import React from 'react';
import s from './ModalChangeAbout.module.scss'
import CustomTextArea from "../CustomTextArea/CustomTextArea";
import {useCookies} from "react-cookie";
import Api from "../../api/api";

const ModalChangeAbout = (props: any) => {
    const [cookies] = useCookies();

    const data = [
        {text: 'О нас', type: 'text', value: props.value, setValue: props.setValue},
    ];

    const changeAbout = () => {
        let token = cookies.token;
        let id = props.id;
        Api.changeAbout(token, props.value, id).then(res => {
            props.setActive(false)
        })
    }


    const inputItems = data.map(i => <CustomTextArea value={i.value} setValue={i.setValue} text={i.text}
                                                     type={i.type}/>)

    return (
        <div className={s.modal} onClick={() => props.setActive(false)}>
            <div className={s.modalInner} onClick={(e) => e.stopPropagation()}>
                <form className={s.inpCont}>
                    <div>
                        {inputItems}
                    </div>
                </form>
                <button onClick={changeAbout} className={s.btn}>{props.value !== '' ? 'Изменить' : 'Добавить'}</button>
            </div>
        </div>
    );


};

export default ModalChangeAbout;