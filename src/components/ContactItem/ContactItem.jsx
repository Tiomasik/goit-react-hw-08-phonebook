import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";

import { deleteContact } from "redux/contacts/operations";
import { Item, IconSmile, IconPhone } from "./ContactItem.styled";

import { useState } from "react"
import { useSelector } from 'react-redux';
import Modal from '../Modal/Modal'
import { getContacts } from 'redux/contacts/selectors';

const ContactItem = ({ name, number, id }) => {
    const dispatch = useDispatch();

    const [openModal, setOpenModal] = useState('');
    const [contact, setContact] = useState({});
    const [contactsWihoutChange, setContactsWihoutChange] = useState({});
    const contacts = useSelector(getContacts);

    const onOpen = () => {
        setContact(contacts.find(contact => contact.id === id))
        setContactsWihoutChange(contacts.filter(contact => contact.id !== id))
        setOpenModal(true)
    }

    const onClose = () => {
        setOpenModal(false)
    }

    return (
        <>
            <div>
                <Item><IconSmile /><span>{name}</span></Item>
                <Item><IconPhone/><span>{number}</span></Item>
            </div>
            <button type="button" onClick={() => dispatch(deleteContact(id))}>Delete contact</button>
            <button type="button" onClick={onOpen}>Change contact</button>
            {openModal && <Modal id={id} onClose={onClose} contact={contact} contactsWihoutChange={ contactsWihoutChange } />}
        </>)
}

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}

export default ContactItem