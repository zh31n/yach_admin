import React, {useRef, useState} from 'react';
import s from "./ModalChangeService.module.scss";
import CustomTextArea from "../CustomTextArea/CustomTextArea";

const ModalChangeService = (props: any) => {
    const ref = useRef();
    const [desc, setDesc] = useState();
    const [file, setFile] = useState('');

    return (
        <div className={s.modal} onClick={() => props.setActive(false)}>
            <div className={s.modalInner} onClick={(e) => e.stopPropagation()}>
                <form>
                    <CustomTextArea text={'Описание услуги'} setValue={setDesc} value={desc} type={'text'}/>
                </form>
                <input ref={ref} type={'file'} onChange={(e) => setFile(e.target.files)} style={{display: 'none'}}/>
                <button className={s.btn} onClick={() => ref.current.click()}
                        style={{width: '150px', marginBottom: '10px'}}>
                    {file ? 'Изменить фото' : 'Добавить фото'}
                </button>
                <button className={s.btn}>Изменить</button>
            </div>
        </div>
    );
};

export default ModalChangeService;