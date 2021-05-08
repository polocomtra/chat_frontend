import React from 'react'
import './Modal.scss'

const Modal=(props)=>{
    const findByKey=(name)=>{
        for( let i=0;i<props.children.length;i++){
            if(props.children[i].key === name){
                return props.children[i]
            }
        }
    }

    const closeModal=(e)=>{
        e.stopPropagation()
        if(e.target.classList.contains('modal-close')){
            return props.click()
        }
    }

    return (
        <div className="modal-mask modal-close" onClick={closeModal}>
            <div className="modal-wrapper">
                <div className="modal-container">
                    <div className="modal-header">
                        {findByKey('header')}
                    </div>
                    <div className="modal-body">
                        {findByKey('body')}

                    </div>
                    <div className="modal-footer">
                        <button className="modal-close" onClick={closeModal}>Close</button>
                        {findByKey('footer')}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;