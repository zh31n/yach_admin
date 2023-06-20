import React from 'react';
import s from './FaqCard.module.scss';
import trash from '../../assets/trash.svg'
import Api from "../../api/api";
import {useCookies} from "react-cookie";


const FaqCard = (props: any) => {
    const [cookies] = useCookies();
    const deleteFaq = () => {
        const token = cookies.token;
        let id = props.id;
        Api.deleteFaq(token,id).then(res => {
            Api.getFaq(props.town).then(res =>{
                console.log(res.data);
                props.setFaqItems(res.data);
            })
        })
    }

    return (
        <>
            <div className={s.faqCont}>
                <div className={s.quesCont}>
                    <div className={s.ques}>{props.question}</div>
                    <div className={s.ques}>{props.answer}</div>
                </div>
                <img onClick={deleteFaq} className={s.trash} src={trash} alt=""/>
            </div>
        </>
    );
};

export default FaqCard;