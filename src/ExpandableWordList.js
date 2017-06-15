import React, { Component } from 'react'
import './ExpandableWordList.css'

class ExpandableWordList extends Component {
  state = {
    visible: {},
  }

  clickHandler = word => e => {
    this.setState((prevState) => {
      const visible = prevState.visible
      visible[word] = !prevState.visible[word]
      return visible
    })
  }

  renderAnagramList = word => {
    return (
      <ul>
        {this.props.getAnagrams(word).map(anagram =>
          <li key={anagram} className="anagram-word list-reset">{anagram}</li>
        )}
      </ul>
    )
  }

  renderWordList = (words) => words
    .filter(word => word.toLowerCase().includes(this.props.filterText.toLowerCase()))
    .map(word =>
      <li key={word} onClick={this.clickHandler(word)} className="unique-word list-reset">
        {word}
        {this.state.visible[word] ? this.renderAnagramList(word) : null }
      </li>
  )

  componentWillMount() {
    const visible = {}
    this.props.words.forEach(word => visible[word] = false)
    this.setState({visible})
  }

  render() {
    return (
      <ul className="list-reset">{this.renderWordList(this.props.words)}</ul>
    )
  }
}

export default ExpandableWordList
