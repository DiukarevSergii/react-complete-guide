import React, { useEffect }  from 'react';
import Person from './Person/Person';
import './Person/Person.css';

const Persons = ( props ) => {
    useEffect(() => {
        setTimeout(() => {
            alert('Alert when persons changed!');
        })
    }, [props.persons]);

    return props.persons.map((person, index) => {
    const { changed, click } = props;

    return <Person
        key={person.id}
        name={person.name}
        age={person.age}
        click={() =>click(index)}
        changed={(event) => changed(event, person.id)}
    />
    })
};


export default Persons;
