const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: []
        },
        actions: {
			createAgenda: async () => {
                try {
                    const response = await fetch("https://playground.4geeks.com/contact/agendas/iago", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                    });
                    if (!response.ok) throw new Error("Failed to create agenda");
                } catch (error) {
                    console.log("Error creating agenda", error);
                }
            },
            loadContacts: async () => {
                try {
                    const response = await fetch("https://playground.4geeks.com/contact/agendas/iago/contacts");
                    if (!response.ok) throw new Error("Failed to load contacts");
                    const data = await response.json();
                    setStore({ contacts: data.contacts });
                } catch (error) {
                    console.log("Error loading contacts", error);
                }
            },
            addContact: async (contact) => {
                try {
                    const response = await fetch("https://playground.4geeks.com/contact/agendas/iago/contacts", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(contact),
                    });
                    if (!response.ok) throw new Error("Failed to add contact");
                    getActions().loadContacts();
                } catch (error) {
                    console.log("Error adding contact", error);
                }
            },
            updateContact: async (contact) => {
                try {
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/iago/contacts/${contact.id}`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(contact),
                    });
                    if (!response.ok) throw new Error("Failed to update contact");
                    getActions().loadContacts();
                } catch (error) {
                    console.log("Error updating contact", error);
                }
            },
            deleteContact: async (contactId) => {
                try {
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/iago/contacts/${contactId}`, {
                        method: "DELETE",
                    });
                    if (!response.ok) throw new Error("Failed to delete contact");
                    getActions().loadContacts();
                } catch (error) {
                    console.log("Error deleting contact", error);
                }
            },
        },
    };
};

export default getState;
