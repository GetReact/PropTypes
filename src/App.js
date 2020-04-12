import React from 'react';
import './App.css';
import { Component } from 'react';
import PropTypes from 'prop-types'

const Person = ({ person: { img, name, age, info } }) => {
  //OR const { img, name, age, info} = props.person
  return (
    <article>
      <img src={img} alt="person" />
      <h4>name : {name}</h4>
      <h4>age : {age}</h4>
      <h4>info : {info || "default info"}</h4>
    </article>
  )
}
Person.propTypes = {
  // img: PropTypes.string.isRequired,
  // name: PropTypes.string.isRequired,
  // age: PropTypes.number.isRequired,
  // info: PropTypes.string.isRequired,
  person: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    info: PropTypes.string.isRequired,

  })
};
Person.defaultProps = {
  // img: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
  // name: 'Bob',
  // age: 12,
  // info: 'default info about the person'
  person: {
    info: 'default info about the person'
  }
}
class PersonList extends Component {
  state = {
    people: [
      {
        id: 1,
        img: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
        name: 'Daniel',
        age: 15
      },
      {
        id: 2,
        img: "https://randomuser.me/api/portraits/thumb/men/66.jpg",
        name: 'Grace',
        age: 29
      },
      {
        id: 3,
        img: "https://randomuser.me/api/portraits/thumb/men/33.jpg",
        name: 'Peter',
        age: 27,
        info: 'baaa aaaaa aaaaaaaaaaa aaaa aaaaa nn nnnnn nnnnnn'
      }
    ]
  }
  render() {
    return (
      <section>
        {
          this.state.people.map(
            (person) => (
              <Person key={person.id}
                person={person}>
              </Person>
            )
          )
        }
      </section>
    )
  }
}



class App extends Component {


  render() {
    return (
      <div>
        <PersonList />
      </div>
    )
  }
}


export default App;
