import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import s from './City.module.scss'
import YachtCard from "../../components/YachtCard/YachtCard";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import ModalAddYacht from "../../components/ModalAddYacht/ModalAddYacht";
import ModalChangeService from "../../components/ModalChangeService/ModalChangeService";
import Api from "../../api/api";
import {Navigate} from "react-router-dom";

import {useParams} from "react-router-dom";
import FaqCard from "../../components/FaqCard/FaqCard";
import ModalCreateFaq from "../../components/ModalCreateFaq/ModalCreateFaq";
import ModalChangeAbout from "../../components/ModalChangeAbout/ModalChangeAbout";
import ModalChangeCatering from "../../components/ModalChangeCatering/ModalChangeCatering";

const City = (props: any) => {

    if (!props.isAuth) {
        return <Navigate to={'/'}/>
    }

    let [modalYacht, setModalYacht] = useState(false);
    let [modalService, setModalService] = useState(false);
    let [modalFaq, setModalFaq] = useState(false);
    let [modalAbout, setModalAbout] = useState(false);
    let [modalChangeService, setModalChangeService] = useState(false);
    const [city, setCity] = useState(null);
    const [serviceName, setServiceName] = useState('');
    const [faqItems, setFaqItems] = useState([]);
    const [about, setAbout] = useState('');

    let {townId} = useParams();

    useEffect(() => {
        Api.getTown(townId).then(res => {
            setCity(res.data);
            setAbout(res.data.data.about.text);
            if (faqItems.length === 0) {
                Api.getFaq(res.data.data.town.name).then(res => {
                    setFaqItems(res.data);
                })
            }
        });
    }, [setCity, setFaqItems]);


    if (!city) {
        return <div>Загрузка</div>
    }

    let yachtItems = city.data.yachts.map(y => <YachtCard name={y.spec.name} key={y.id} id={y.id} townId={townId}
                                                          setCity={setCity}/>);
    let servicesItems = city.data.services.map(s => <ServiceCard key={s._id} id={s._id} name={s.name}
                                                                 setServiceName={setServiceName}
                                                                 setModal={setModalService}/>);
    let faqItemsed = faqItems.map(f => <FaqCard answer={f.answer} id={f._id} question={f.question}
                                                setFaqItems={setFaqItems} town={city.data.town.name}/>)


    return (
        <div className={s.container}>
            {modalYacht &&
                <ModalAddYacht city={city.data.town} setActive={setModalYacht} setCity={setCity} townId={townId}/>}
            {modalService && <ModalChangeService setActive={setModalService} townName={city.data.town.name}
                                                 serviceName={serviceName}/>}
            {modalFaq && <ModalCreateFaq setActive={setModalFaq} setFaqItems={setFaqItems} town={city.data.town.name}/>}
            {modalAbout && <ModalChangeAbout setActive={setModalAbout} value={about} setValue={setAbout}
                                             id={city.data.about._id}/>}
            { modalChangeService && <ModalChangeCatering setActive={setModalChangeService} town={city.data.town.name}  /> }
            <div className={s.coord}>{city.data.town.name}, {city.data.town.country}</div>
            <div className={s.content}>
                <div className={s.seccont}>
                    <h3 className={s.titleYacht}>Яхты</h3>
                    <div className={s.yCont}>
                        {yachtItems.length === 0 ? <span>Яхт нет</span> : yachtItems}
                    </div>
                    <button onClick={() => setModalYacht(true)} className={s.addYacht}>+</button>
                </div>
                <div className={s.seccont}>
                    <h3 className={s.titleYacht}>Услуги</h3>
                    <div className={s.sCont}>
                        {servicesItems}
                        <ServiceCard setModal={setModalChangeService} name={'Кейтеринг'}/>
                    </div>
                </div>
            </div>
            <div onDoubleClick={() => setModalAbout(true)} className={s.about}>
                {about === '' ? <span>О нас нет</span> : about}
            </div>
            <div className={s.faq}>
                <button onClick={() => setModalFaq(true)} className={s.addYacht}>+</button>
                {faqItemsed.length === 0 ? <span>Faq нет</span> : faqItemsed}
            </div>
        </div>
    );
};


export default City;