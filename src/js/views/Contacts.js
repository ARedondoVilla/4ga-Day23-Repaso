import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";
import { array } from "prop-types";

export const Contacts = () => {
    const myArray = [{name: "Alejandro"}, {name: "Marta"}];
	const [state, setState] = useState({
		showModal: false
	});

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
                        {myArray.map((item, index) => {
                            console.log("Mi valor es: ", item);
                            console.log("Mi indice es: ", index);
                            return (
                                <li key={index}>
                                    <span>{item.name}</span>

                                </li>
                            )
                            
                        })}

						<ContactCard onDelete={() => setState({ showModal: true })} />
					
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} onClose={() => setState({ showModal: false })} />
		</div>
	);
};
