import React, { useEffect, useRef, useContext } from 'react';
import PropTypes from 'prop-types';
import AuthContext from '../../context/auth-context';
import classes from './Cockpit.css';

const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log('[Cockpit] authContext', authContext);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Http request...
    setTimeout(() => {
      // alert('Saved data to cloud!');
      toggleBtnRef.current.click();
    }, 300);
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    };
  });

  // useEffect();

  const assignedClasses = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      {/* eslint-disable-next-line react/button-has-type */}
      <button className={btnClass} ref={toggleBtnRef} onClick={props.clicked}>
        Toggle Persons
      </button>
      <button onClick={authContext.login}>Log in</button>
    </div>
  );
};

Cockpit.propTypes = {
  title: PropTypes.string,
  clicked: PropTypes.func,
  personsLength: PropTypes.number,
  showPersons: PropTypes.bool,
};

export default React.memo(Cockpit);
