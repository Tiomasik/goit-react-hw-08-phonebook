import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { toast } from 'react-toastify';
    
export const fetchAll = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      toast.error("Sorry, the server is not responding :( Try again later.")
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      toast.success("The contact has been successfully added to your phonebook!")
      return response.data;
    } catch (error) {
      toast.error("Sorry, the server is not responding :( Try again later.")
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      toast.success("The contact has been deleted from your phonebook!")
      return response.data;
    } catch (error) {
      toast.error("Sorry, the server is not responding :( Try again later.")
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changeContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const arrayContact = { name: contact.name, number: contact.number }
      toast.success("The contact has been changed in your phonebook!")
      const response = await axios.patch(`/contacts/${contact.id}`, arrayContact);
      return response.data;
    } catch (error) {
      toast.error("Sorry, the server is not responding :( Try again later.")
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);