import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhoneFlip, faEnvelope, faPencil, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../store/appContext";
import Contacts from "../../img/Contacts.png";
import { Link } from "react-router-dom";

export const AgendaContact = ({ contact }) => {
    const { actions } = useContext(Context);
    const [showModal, setShowModal] = useState(false);

    const handleDelete = () => {
        actions.deleteContact(contact.id);
        setShowModal(false);
    };

    return (
        <li className="list-group-item d-flex row">
            <div className="d-flex justify-content-start col-sm-4">
                <img id="contactImg" className="me-5" src={Contacts} alt="Contact" />
            </div>
            <div className="d-flex flex-column justify-content-center col-sm-6">
                <div className="text-start">
                    <h5>{contact.name}</h5>
                </div>
                <div className="text-start">
                    <h5 className="text-secondary">
                        <FontAwesomeIcon className="me-3" icon={faLocationDot} />
                        {contact.address}
                    </h5>
                    <h5 className="text-secondary">
                        <FontAwesomeIcon className="me-3" icon={faPhoneFlip} />
                        {contact.phone}
                    </h5>
                    <h5 className="text-secondary">
                        <FontAwesomeIcon className="me-3" icon={faEnvelope} />
                        {contact.email}
                    </h5>
                </div>
            </div>
            <div className="d-flex justify-content-around col-sm-2 px-5">
                <Link to={`/EditContact/${contact.id}`} className="text-dark">
                    <FontAwesomeIcon className="me-3" icon={faPencil} />
                </Link>
                <FontAwesomeIcon icon={faTrashCan} onClick={() => setShowModal(true)} />
            </div>
            {showModal && (
                <div className="modal fade show" tabIndex="-1" style={{ display: "block" }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title fw-bold">Are you sure?</h5>
                                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                            </div>
                            <div className="modal-body">
                                <p>If you delete this thing the entire universe will go down!</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={() => setShowModal(false)}>Oh no!</button>
                                <button type="button" className="btn btn-secondary" onClick={handleDelete}>Yes baby!</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </li>
    );
};