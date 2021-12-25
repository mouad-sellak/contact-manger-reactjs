import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Routes, } from 'react-router-dom';
import './App.css'
import Navbar from "./components/navbar/Navbar";
import Contacts from "./components/contact/Contacts";
import 'font-awesome/css/font-awesome.min.css'
import { Provider } from './components/Context'
import AddContact from './components/contact/AddContact';
import EditContact from './components/contact/EditContact';
import About from './components/pages/About'
import NotFound from './components/pages/NotFound'


class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Navbar />
            {/* <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contact/add" component={AddContact} />
              <Route exact path="/about" component={About} />
              <Route exact  component={NotFound} />
            </Switch> */}
            <Routes>
              <Route exact path="/" element={<Contacts/>} />
              <Route exact path="/contact/add" element={<AddContact/>} />
              <Route exact path="/contact/edit/:id" element={<EditContact/>} />
              <Route exact path="/about" element={<About/>} />
              {/* <Route exact path="/about/:id/:name" element={<About/>} /> */}
              <Route exact element={<NotFound/>} />
            </Routes>
          </div>
        </Router>
      </Provider>

    );
  }
}

export default App;
