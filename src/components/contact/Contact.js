import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Contact.css'
import { Consumer } from '../Context'
import axios from 'axios'
import {Link} from 'react-router-dom'
class Contact extends Component {
    state = {
        showContactToggle: true
    }
    showContact() {
        this.setState({ showContactToggle: !this.state.showContactToggle })
    }
    async onDeleteClick(id, dispatch) {
        //this.props.deleteContactFromChild()

        //with than catch

        // axios.delete('https://jsonplaceholder.typicode.com/users/'+id)
        //  .then(()=> dispatch({
        //     type: 'deleteContact',
        //     payload: id
        // }) )
        //  .catch(err=>console.error(err))  
         
        const res = await axios.delete('https://jsonplaceholder.typicode.com/users/'+id)
         dispatch({
            type: 'deleteContact',
            payload: id
        }) 
    }
    render() {
        const { id, name, phone } = this.props.data
        return (
            <Consumer>
                {
                    value => {
                        const { dispatch } = value
                        return (
                            <div className="container">
                                <div className="row my-4 ">
                                    <div className="col-md-6 mx-auto" >
                                        <div className="card">
                                            <div className="card-body">
                                                <h5>
                                                    {/* {name} <i onClick={this.showContact.bind(this, name)} className="fa fa-sort-down"></i> */}
                                                    {name}
                                                    <i 
                                                        style={{ color: 'blue', cursor: 'pointer' }} 
                                                        onClick={() => this.showContact()} 
                                                        className="fa fa-sort-down m-1">
                                                    </i>
                                                    <i 
                                                        style={{ color: 'red', float: 'right', cursor: 'pointer' }} 
                                                        onClick={this.onDeleteClick.bind(this, id, dispatch)} 
                                                        className="fa fa-times m-1">
                                                    </i>
                                                    <Link to={`contact/edit/${id}`}>
                                                        <i 
                                                            className="fa fa-edit m-1" 
                                                            style={{float:'right'}}>
                                                        </i>
                                                    </Link>

                                                </h5>
                                                {(this.state.showContactToggle) ? (<h6 className="list-group-item disabled">{phone}</h6>) : null}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                }
            </Consumer>
        )
    }
}
Contact.defaultProps = {
    data: {
        name: "name",
        phone: "00000000"
    }

}

Contact.propTypes = {
    data: PropTypes.object.isRequired,
    //deleteContactFromChild: PropTypes.func.isRequired
}

export default Contact;



