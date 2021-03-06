import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  // eslint-disable-next-line react/sort-comp,react/static-property-placement
  static contextType = AuthContext;

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log('[Person] this.context.authenticated', this.context.authenticated);
  }

  render() {
    console.log('[Person.js] rendering...');
    return (
      <Aux>
        {this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in!</p>}

        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events */}
        <div onClick={this.props.click}>
          <p>
          I&aposm
            {' '}
            {this.props.name}
            {' '}
          and I am
            {' '}
            {this.props.age}
            {' '}
          years old!
          </p>
        </div>

        <p key="i2">{this.props.children}</p>
        <input
          key="i3"
          // ref={(inputEl) => {this.inputElement = inputEl}}
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  children: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
  isAuth: PropTypes.bool,
};

export default withClass(Person, classes.Person);
