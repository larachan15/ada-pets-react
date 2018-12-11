import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './NewPetForm.css'

class NewPetForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      petName: "",
      species: "",
      about: "",
      location: ""
    };
  }

  onNameChange = (event) => {
    console.log("New pet name added", event, event.target);
    this.setState({petName: event.target.value})
  }

  onSpeciesChange = (event) => {
    this.setState({species: event.target.value})
  }

  onLocationChange = (event) => {
    this.setState({location: event.target.value})
  }

  onAboutChange = (event) => {
    this.setState({about: event.target.value})
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    const newPet = {
      petName: this.state.petName,
      species: this.state.species,
      location: this.state.location,
      about: this.state.about
    };

    this.setState({
      petName: "",
      species: "",
      location: "",
      about: ""
    });

    console.log("Created a new pet:", newPet, newPet.id);
    // this.props.addPetCallback
  }

  render() {
    return (
      <form  className="new-pet-form"
             onSubmit={this.onFormSubmit}>
        {/* <h3>Add a Pet</h3> */}
        { /* A form should go here! */ }
        <div>
          <label className="new-pet-form--label"
                 htmlFor="petName">Name:</label>
               <input name="petName"
                 placeholder="name"
                 value={this.state.petName}
                 onChange={this.onNameChange}/>
        </div>

        <div>
          <label className="new-pet-form--label"
                 htmlFor="species">Species:</label>
               <input name="species"
                 placeholder="species"
                 value={this.state.species}
                 onChange={this.onSpeciesChange}/>
        </div>

        <div>
          <label className="new-pet-form--label"
                 htmlFor="location">Location:</label>
               <input name="location"
                 placeholder="location"
                 value={this.state.location}
                 onChange={this.onLocationChange}/>
        </div>

        <div>
          <label className="new-pet-form--label"
                 htmlFor="about">About:</label>
        </div>

        <div>
          <textarea className="new-pet-form--about"
             name="about"
             placeholder="Tell us about this pet!"
             value={this.state.about}
             onChange={this.onAboutChange}/>
        </div>

        <input className="btn btn-success new-pet-form--submit" type="submit" name="submit" value="Add a Pet" />
      </form>
    );
  }


}

NewPetForm.propTypes = {
  addPetCallback: PropTypes.func.isRequired,
};

export default NewPetForm;
