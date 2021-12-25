import React, { Component } from 'react'
import Contact from './Contact';
import { Consumer } from '../Context'
class Contacts extends Component {

    deleteContact(id) {
        const { contacts } = this.state
        const newcontacts = contacts.filter(contact => contact.id !== id)
        this.setState({
            contacts: newcontacts
        })
    }
    render() {
        return (
            <Consumer>
                { value => (
                    <div>
                        {value.contacts.map( contact => (
                            <Contact key={contact.id} data={contact} deleteContactFromChild={this.deleteContact.bind(this, contact.id)} />
                        ))}
                    </div>
                )}
            </Consumer>
        )
    }
}

export default Contacts;
