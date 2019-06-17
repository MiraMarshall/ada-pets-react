import React from 'react';
import PropTypes from 'prop-types';
import PetCard from './PetCard';

import 'bootstrap/dist/css/bootstrap.min.css';


const PetList = (props) => {
const listOfPets = props.allPets.map((pet, i) => {
  return (
    <PetCard 
    key={i}
    id={pet.id}
    name={pet.name}
    species={pet.species}
    about={pet.about}
    location={pet.location}
    />
  )
 
})

return (
  <div className="card-group">
    {listOfPets}
  </div>
)
}
PetList.propTypes = {
  pets: PropTypes.array.isRequired,
  onSelectPet: PropTypes.func,
};

export default PetList;
