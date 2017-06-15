import React, { Component } from 'react';
import Anagrams from './Anagrams.js'
import sampleData from './sampleData.js'
import ExpandableWordList from './ExpandableWordList.js'

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
          <ExpandableWordList
            words={this.state.words}
            getAnagrams={anagrams.get.bind(anagrams)}
          />
        </div>
      </div>
    );
  }
}

export default App;
