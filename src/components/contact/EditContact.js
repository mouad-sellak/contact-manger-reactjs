import React, { Component } from 'react'
import { Consumer } from '../Context'  // {} if is not a default export
import TextInputGroup from '../helpers/TextInputGroup'
import axios from 'axios'
//import {useHistory} from 'react-router-dom'
class EditContact extends Component {
    state = {
        name: '',
        phone: '',
        errors: {}
    }

    async componentDidMount() {
        if ( this.props.match) {
            const id=this.props.match.params.id
            console.log(id)
            const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${1}`)
            this.setState({
                name:res.data.name,
                phone: res.data.phone
            })
        }
    }


    onChangeInput = (e) => this.setState({ //e event
        [e.target.name]: e.target.value
    })




    submit = async (dispatch, length, e) => {
        e.preventDefault()
        const { name, phone } = this.state
        if (!name) {
            this.setState({
                errors: { name: 'The name is required !!' }
            })
            return
        }
        if (!phone) {
            this.setState({
                errors: { phone: 'The phone is required !!' }
            })
            return
        }
        const id = this.props.match.params.id
        const upContact = {
            name,
            phone
        }
        //with then catch
        // axios.post(`https://jsonplaceholder.typicode.com/users/${id}`, upContact)
        //     .then( res => dispatch({
        //         type: 'addContact',
        //         payload: res.data
        //     }))

        //with async await
       const res= await axios.post(`https://jsonplaceholder.typicode.com/users/${id}`, upContact)
        dispatch({
            type: 'updateContact',
            payload: res.data
        })



        // if (name && phone) {

        // {
        //     //id: length + 1,
        //     name,
        //     phone
        // }

        //}
        // else{
        //     alert('you should fill all inputs !')
        // }
        this.setState({
            name: '',
            phone: '',
            errors: {}
        })
        // let history=useHistory()
        // history.push("/")

        //this.props.history.push('/')
    }






    render() {
        const { name, phone, errors } = this.state
        return (
            <Consumer>
                {
                    value => {
                        const { dispatch } = value
                        return (
                            <div className="container mx-auto row m-4 col-md-6" >
                                <form onSubmit={this.submit.bind(this, dispatch, value.contacts.length)} >
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">Add Contact</h4>
                                            <div className="card-text">
                                                <TextInputGroup
                                                    label="Name"
                                                    name="name"
                                                    type="text"
                                                    value={name}
                                                    onChange={this.onChangeInput}
                                                    error={errors.name}
                                                />
                                                <TextInputGroup
                                                    label="Phone"
                                                    name="phone"
                                                    type="text"
                                                    value={phone}
                                                    onChange={this.onChangeInput}
                                                    error={errors.phone}
                                                />
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary btn-lg btn-block my-4">
                                                    Add New Contact
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        )
                    }
                }
            </Consumer>
        )
    }
}

export default EditContact;