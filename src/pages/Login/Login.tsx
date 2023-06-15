import React, {useState} from 'react';
import s from './Login.module.scss'
import CustomInput from "../../components/CustomInput/CustomInput";
import {connect} from "react-redux";
import Api from "../../api/api";
import { Navigate } from "react-router-dom";


const Login = (props: any) => {

    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    const [isAuth,setIsAuth] = useState(false)
    const [err,setErr] = useState(false)


    const onSubmitClick = () => {

        Api.login(email,pass).then(res => {
            res.data._id ? setIsAuth(true) : setErr(true)
        })
    }

    if(isAuth){
        return <Navigate to={'/cities'}/>
    }

    return (
        <div className={s.container}>
            <div className={s.blockInputs}>
                <CustomInput text={'E-mail'} type={'email'} placeholder={'Введите почту'} value={email} setValue={setEmail}/>
                <CustomInput text={'Пароль'} type={'password'} placeholder={'Введите пароль'} value={pass} setValue={setPass}/>
                <button onClick={onSubmitClick} className={s.InpBtn}>Войти</button>
                {err && <div className={s.err}>Ошибка входа</div>}
            </div>
        </div>
    );
};

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {})(Login);