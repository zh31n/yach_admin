import React from 'react';
import s from "./ModalAddService.module.scss";
import CustomInput from "../CustomInput/CustomInput";

const ModalAddService = (props: any) => {

    return (
        <div className={s.modal} onClick={() => props.setActive(false)}>
            <div className={s.modalInner} onClick={(e) => e.stopPropagation()}>
                <form className={s.inpCont}>
                    <CustomInput text={'Название услуги'} type={'text'}/>
                </form>
                <button className={s.btn}>Добавить</button>
            </div>
        </div>
    );
};

export default ModalAddService;