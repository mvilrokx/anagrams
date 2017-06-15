import React, { Component } from 'react';
import Anagrams from './Anagrams.js'
import sampleData from './sampleData.js'

const anagrams = new Anagrams()

class App extends Component {

  state = {
    words: Array.prototype.concat(...anagrams.getAll()),
  }

  add = sentence => {
    anagrams.document(sentence)
    this.setState( {words: Array.prototype.concat(...anagrams.getAll())} )
  }

  /*
   * Lifecycle Methods
   */
  componentWillMount() {
    /* Normally this would be REST calls or DB calls, this is just for testing */
    sampleData.forEach(sample => this.add(sample))
  }

  render() {
    return (
      <div className='clearfix p2'>
        <div className="col-11 sm-col-11 md-col-6 lg-col-4 px2 mx-auto">
          <ul>
            {this.state.words.map(word => <li>{word}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
