import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddNewContact = () => {
    const { actions } = useContext(Context);
    const [contact, setContact] = useState({
        name: "",
        phone: "",
        email: "",
        address: ""
    });

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setContact({
            ...contact,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        actions.addContact(contact);
        navigate("/");
    };

    return (
        <form className="row g-3 m-5 d-flex justify-content-center" onSubmit={handleSubmit}>
            <h1 className="col-12 col-xl-10 text-center"><strong>Add a new contact</strong></h1>
            <div className="col-12 col-xl-10">
                <label htmlFor="inputName" className="form-label fw-bold">Full Name</label>
                <input type="text" className="form-control" id="inputName" name="name" placeholder="Full Name" value={contact.name} onChange={handleChange} required />
            </div>
            <div className="col-12 col-xl-10">
                <label htmlFor="inputEmail" className="form-label fw-bold">Email</label>
                <input type="email" className="form-control" id="inputEmail" name="email" placeholder="Enter email" value={contact.email} onChange={handleChange} required />
            </div>
            <div className="col-12 col-xl-10">
                <label htmlFor="inputPhone" className="form-label fw-bold">Phone</label>
                <input type="tel" className="form-control" id="inputPhone" name="phone" placeholder="Enter phone" value={contact.phone} onChange={handleChange} required />
            </div>
            <div className="col-12 col-xl-10">
                <label htmlFor="inputAddress" className="form-label fw-bold">Address</label>
                <input type="text" className="form-control" id="inputAddress" name="address" placeholder="Enter address" value={contact.address} onChange={handleChange} required />
            </div>
            <div className="col-12 col-xl-10 d-grid">
                <button type="submit" className="btn btn-primary">Save</button>
            </div>
            <div className="col-12 col-xl-10 d-grid">
              <Link to="/">or get back to contacts</Link>
            </div>
        </form>
    );
};
