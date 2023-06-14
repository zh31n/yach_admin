import React from 'react';
import s from './Login.module.scss'
import CustomInput from "../../components/CustomInput/CustomInput";
import {connect} from "react-redux";


const Login = (props: any) => {

    return (
        <div className={s.container}>
            <div className={s.blockInputs}>
                <CustomInput text={'E-mail'} type={'email'} placeholder={'Введите почту'}/>
                <CustomInput text={'Пароль'} type={'password'} placeholder={'Введите пароль'}/>
                <button className={s.InpBtn}>Войти</button>
            </div>
        </div>
    );
};

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {})(Login);