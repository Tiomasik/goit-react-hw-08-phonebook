import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { useState } from "react"
import { useSelector } from 'react-redux';

import { deleteContact } from "redux/contacts/operations";
import { Item, IconSmile, IconPhone, Button, IconChange, IconDelete } from "./ContactItem.styled";
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
            <Button>
                <button type="button" onClick={onOpen}><IconChange/><span>Change</span></button>
                <button type="button" onClick={() => dispatch(deleteContact(id))}><IconDelete/><span>Delete</span></button>
            </Button>
            {openModal && <Modal id={id} onClose={onClose} contact={contact} contactsWihoutChange={ contactsWihoutChange } />}
        </>)
}

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}

export default ContactItem