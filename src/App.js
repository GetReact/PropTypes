import React from 'react';
import './App.css';
import { Component } from 'react';
import PropTypes from 'prop-types'
const Person = ({ img, name, age, info }) => {
  return (
    <article>
      <img src={img} alt="person" />
      <h4>name : {name}</h4>
      <h4>age : {age}</h4>
      <h4>info : {info}</h4>
    </article>
  )
}
Person.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};
Person.defaultProps = {
  img: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
  name: 'Bob',
  age: 12,
  info: 'default info about the person'
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
        // img: "https://randomuser.me/api/portraits/thumb/men/66.jpg",
        // name: 'Grace',
        // age: 29
      },
      {
        id: 3,
        img: "https://randomuser.me/api/portraits/thumb/men/88.jpg",
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
                img={person.img}
                name={person.name}
                age={person.age}>
                info={person.info}>
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
