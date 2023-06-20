import React, {useRef, useState} from 'react';
import s from './ModalAddUser.module.scss'
import CustomInput from "../CustomInput/CustomInput";
import Api from "../../api/api";
import axios from "axios";
import {useCookies} from "react-cookie";

const ModalAddUser = (props: any) => {

    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const [err,setErr] = useState();
    const [cookies, setCookie, removeCookie] = useCookies();
    const data = [
        {text: 'Email', type: 'email', setValue: setEmail, value: email},
        {text: 'Пароль', type: 'password', setValue: setPass, value: pass},
    ];
    const ref = useRef();

    const inputItems = data.map(i => <CustomInput text={i.text} type={i.type} setValue={i.setValue} value={i.value}/>)
    const createYacht = () => {
        Api.createUser(email,pass).then(res =>{
            props.setActive(false);
        })
    }

    return (
        <div className={s.modal} onClick={() => props.setActive(false)}>
            <div className={s.modalInner} onClick={(e) => e.stopPropagation()}>
                <form className={s.inpCont}>
                    <div>
                        {inputItems}
                    </div>
                </form>
                <button onClick={createYacht} className={s.btn}>Добавить</button>
            </div>
        </div>
    );


}


export default ModalAddUser;