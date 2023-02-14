import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import { changeContact } from 'redux/contacts/operations';
import { Overlay, ModalForm, Form } from './Modal.styled';


const Modal = ({ onClose, id, contact, contactsWihoutChange }) => {
    const [name, setName] = useState(contact.name);
    const [number, setNumber] = useState(contact.number);
    const dispatch = useDispatch();
    
    const handlChangeName = (evt) => {
    const { value } = evt.currentTarget
    setName(value)
    }
    
    const handlChangeNumber = (evt) => {
    const { value } = evt.currentTarget
    setNumber(value)
    }
    
    const handlSubmit = (value) => {  
        value.preventDefault()
        const arrayContact = { id, name: value.target[0].value, number: value.target[1].value }
        
        if (!(contactsWihoutChange.filter(contact => contact.name.toLowerCase() === arrayContact.name.trim().toLowerCase())).length) {
            onClose()
        return dispatch(changeContact(arrayContact))
        } else toast.error(`${arrayContact.name} is already in contacts`)   
    }
    
    useEffect(() => {
        const handleKeyDown = evt => {
        if (evt.code === 'Escape') {
            onClose()
        }
    }
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [onClose]);

    const handlOverlayClick = (evt) => {
        if (evt.target === evt.currentTarget) {
            onClose()
        }
    }

    return (
        <Overlay className="Overlay" onClick={handlOverlayClick}>
            <ModalForm className="Modal">
                <Form onSubmit={handlSubmit}>
                    <input
                    type="text"
                    value={name}
                    onChange={handlChangeName}
                    autoComplete="off"
                    autoFocus
                            />
                    <input
                    type="text"
                    value={number}
                    onChange={handlChangeNumber}
                    autoComplete="off"
                    autoFocus
                    />
                    <div>
                        <button type="submit">Change</button>
                        <button type="button" onClick={onClose}>Cancel</button>
                    </div>
                </Form>
            </ModalForm>
        </Overlay>
    )
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    contact: PropTypes.object.isRequired,
    contactsWihoutChange: PropTypes.array.isRequired,
    id: PropTypes.string.isRequired,
}

export default Modal;