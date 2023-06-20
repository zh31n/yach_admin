import React, {useState} from 'react';
import s from './ModalCreateFaq.module.scss'
import CustomTextArea from "../CustomTextArea/CustomTextArea";
import {useCookies} from "react-cookie";
import Api from "../../api/api";

const ModalCreateFaq = (props: any) => {
    const [ques, setQues] = useState();
    const [answer, setAnswer] = useState();
    const [cookies] = useCookies();

    const data = [
        {text: 'Вопрос', type: 'text', value: ques, setValue: setQues},
        {text: 'Ответ', type: 'text', value: answer, setValue: setAnswer},
    ];

    const addFaq = () => {
        let token = cookies.token;
        let town = props.town;
        Api.createFaq(token,town,ques,answer).then(res =>{
            Api.getFaq(town).then(res =>{
                props.setFaqItems(res.data);
                props.setActive(false);
            })
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
                <button onClick={addFaq} className={s.btn}>Добавить</button>
            </div>
        </div>
    );


};

export default ModalCreateFaq;