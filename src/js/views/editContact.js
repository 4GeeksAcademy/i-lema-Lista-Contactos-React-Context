import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const EditContact = () => {
    const { store, actions } = useContext(Context);
    const [contact, setContact] = useState({
        name: "",
        phone: "",
        email: "",
        address: ""
    });

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const existingContact = store.contacts.find(contact => contact.id === parseInt(id));
        if (existingContact) {
            setContact(existingContact);
        }
    }, [id, store.contacts]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setContact({
            ...contact,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        actions.updateContact(contact);
        navigate("/");
    };

    return (
        <form className="row g-3 m-5" onSubmit={handleSubmit}>
            <h1 className="col-12 text-center"><strong>Edit contact</strong></h1>
            <div className="col-12">
                <label htmlFor="inputName" className="form-label fw-bold">Full Name</label>
                <input type="text" className="form-control" id="inputName" name="name" placeholder="Full Name" value={contact.name} onChange={handleChange} required />
            </div>
            <div className="col-12">
                <label htmlFor="inputEmail" className="form-label fw-bold">Email</label>
                <input type="email" className="form-control" id="inputEmail" name="email" placeholder="Enter email" value={contact.email} onChange={handleChange} required />
            </div>
            <div className="col-12">
                <label htmlFor="inputPhone" className="form-label fw-bold">Phone</label>
                <input type="tel" className="form-control" id="inputPhone" name="phone" placeholder="Enter phone" value={contact.phone} onChange={handleChange} required />
            </div>
            <div className="col-12">
                <label htmlFor="inputAddress" className="form-label fw-bold">Address</label>
                <input type="text" className="form-control" id="inputAddress" name="address" placeholder="Enter address" value={contact.address} onChange={handleChange} required />
            </div>
            <div className="col-12 d-grid">
                <button type="submit" className="btn btn-primary">Save</button>
            </div>
            <div className="col-12 d-grid">
                <button type="button" className="btn btn-secondary" onClick={() => navigate("/")}>Cancel</button>
            </div>
        </form>
    );
};
