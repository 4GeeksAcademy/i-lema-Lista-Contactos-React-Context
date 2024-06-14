import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AgendaContact } from "./AgendaContact";
import { Context } from "../store/appContext";

export const Agenda = () => {
    const { store } = useContext(Context);

    return (
        <div className="m-5">
			<div className="row d-flex justify-content-center">
				<div className="col-12 col-xl-10 ">
					<div className="d-flex justify-content-end mb-2">
						<Link to="/NewContact">
							<button type="button" className="btn btn-success">Add new contact</button>
						</Link>
					</div>
					<ul className="list-group">
						{store.contacts.map(contact => (
							<AgendaContact key={contact.id} contact={contact} />
						))}
					</ul>
				</div>
        	</div>
		</div>
    );
};