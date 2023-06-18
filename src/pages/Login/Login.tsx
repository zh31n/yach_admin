import React, {useState} from 'react';
import s from './Login.module.scss'
import CustomInput from "../../components/CustomInput/CustomInput";
import Api from "../../api/api";
import {Navigate} from "react-router-dom";
import {useCookies} from "react-cookie";


const Login = (props: any) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [err, setErr] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies();


    const onSubmitClick = () => {
        Api.login(email, pass).then(res => {
            res.data.token ? props.setIsAuth(true) : setErr(true);
            setCookie('token',res.data.token)
        })
    }

    if (props.isAuth === true) {
        return <Navigate to={'/cities'}/>
    }

    return (
        <div className={s.container}>
            <div className={s.blockInputs}>
                <CustomInput text={'E-mail'} type={'email'} placeholder={'Введите почту'} value={email}
                             setValue={setEmail}/>
                <CustomInput text={'Пароль'} type={'password'} placeholder={'Введите пароль'} value={pass}
                             setValue={setPass}/>
                <button onClick={onSubmitClick} className={s.InpBtn}>Войти</button>
                {err && <div className={s.err}>Ошибка входа</div>}
            </div>
        </div>
    );
};


export default Login;