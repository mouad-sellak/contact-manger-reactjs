import React, { Component } from 'react'
import axios from 'axios'
//thsi file is to centrilize data betwenn contact and contacts in this case we dont need to comunicate contact with contacts
const Context = React.createContext()
const Reducer = (state, action) => {
    switch (action.type) {
        case 'deleteContact':
            return {
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            }
        case 'addContact':
            return {
                contacts: [action.payload, ...state.contacts]
            }
        case 'updateContact':
            return {
                contacts: state.contacts.map(contact => contact.id===action.payload.id ? contact=action.payload : contact)
            }
        default:
            return state
    }
}

export class Provider extends Component {
    state = {
        contacts: [
            { id: 1, name: "Mouad Sellak", phone: "09349349034" },
            { id: 2, name: "Yasine Alami", phone: "093333333034" },
            { id: 3, name: "Fatima Ali", phone: "094444444449034" },
            { id: 4, name: "Amine Jan", phone: "094444444449034" }
        ],
        dispatch: action => this.setState(state => Reducer(state, action)) //this method to determinate which action should i execute
    }

    //with than catch
    // componentWillMount() { //onloadpage
    //     axios.get('https://jsonplaceholder.typicode.com/users')
    //         .then(res => this.setState({
    //             contacts: res.data
    //         }))
    //         .catch(err => console.log(err))
    // }

    //with async await
    async componentDidMount() { //onloadpage
        const res= await axios.get('https://jsonplaceholder.typicode.com/users')

            this.setState({
                contacts: res.data
            })
    }

    render() {
        return (
            <div>
                <Context.Provider value={this.state} >
                    {this.props.children}
                </Context.Provider>
            </div>
        )
    }
}

export const Consumer = Context.Consumer;

//export default if u want to export just one component