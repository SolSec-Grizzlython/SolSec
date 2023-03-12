import React from "react";
import style from "./Modal.module.css";

const Modal = (props, {heading, content}) => {
    if (!props.show === true) {
        return null;
    }
    return(
        <div className={style.modal}>
            <div className={style.modalContent}>
                <span className="close" onClick={props.closeModal}>&times;</span>
                <h1>{heading}</h1>
                <section>{content}</section>
            </div>
        </div>
    )
}

export default Modal;