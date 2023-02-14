import { useDispatch, useSelector } from "react-redux";

import { filterContacts } from "redux/contacts/contactsSlice";
import { getContacts } from "redux/contacts/selectors";
import { StyleInput } from './Filter.styled'

const Filter = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts)

    const changeFilter = (evt) => {
        dispatch(filterContacts(evt.currentTarget.value))
    }
return (
    <>
        {contacts.length !== 0 && <div>
            <StyleInput type="text"
                placeholder="Find contacts by names"
                    onChange={changeFilter}/>
        </div >}
    </>
    )
}

export default Filter