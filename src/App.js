import React, { Component } from 'react';
import PetList from './components/PetList';
import PetCard from './components/PetCard'
import PetDetails from './components/PetDetails';
import SearchBar from './components/SearchBar';
import NewPetForm from './components/NewPetForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import pets from './data/pets.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      petList: pets,
      currentPet: undefined,
    };
  }

  onSelectedPet = (id) => {
    const pet = this.state.petList.find(pet => pet.id === id)

    this.setState({
      currentPet: pet
    })
  }

  onDeletePet = (id) => {
    let revisedPetList = this.state.petList
    const petIndex = revisedPetList.find(pet => pet.id === id)

    revisedPetList.splice(petIndex, 1);
    this.setState({
      petList: revisedPetList
    })
  }

  onAddPet = (newPet) => {
    const pets = this.state.petList
    newPet.id = pets[pets.length - 1].id + 1
    pets.push(newPet);

    if (newPet.petName === "") {
      console.log("Please enter a name");
    }
    else {
      this.setState({
        pets: pets
      })
    }
  }

  render() {
    const { currentPet } = this.state;
    // petDetails will start out as an empty string. if currentPet is not undefined, then petDetails will be the pet currently selected.
    let petDetails = "";
    if (currentPet !== undefined) {
      petDetails = <PetDetails currentPet={currentPet} />
    }

    return (
      <main className="App">
        <header className="app-header">
          <h1>Ada Pets</h1>
        </header>
        <section className="search-bar-wrapper">
          { /* Wave 4:  Place to add the SearchBar component */ }
          <SearchBar />
        </section>
          {petDetails}
        <section className="pet-list-wrapper">
          <PetList pets={this.state.petList}
                   SelectedPet={this.onSelectedPet}
                   DeletePet={this.onDeletePet}
                   />
        </section>
        <section className="new-pet-form-wrapper">
          <NewPetForm addPetCallback={this.onAddPet} />
        </section>
      </main>
    );
  }
}

export default App;
