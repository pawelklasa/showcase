import React from 'react';
import {render} from 'react-dom';
import TestComponent from '../components/testcomponent/testcomponent.jsx';


class App extends React.Component{
  render () {
    return <TestComponent />
  }
}


render(<App />, document.getElementById('root'));