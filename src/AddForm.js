import React, { Component } from 'react'

class AddForm extends Component {
  state = {
    sentence: ''
  }

  handleSentenceChange = e => this.setState({ sentence: e.target.value } )

  handleSubmit = e => {
    e.preventDefault()
    this.props.add(this.state.sentence)
    this.setState({ sentence: '' })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="clearfix mxn1">
        <div className='col col-10 px1'>
          <input
            id='sentence-input'
            className='input'
            type='text'
            value={this.state.sentence}
            onChange={this.handleSentenceChange}
            placeholder='Enter more words...'
          />
        </div>
        <div className='col col-2 px1'>
          <button type='submit' className='btn btn-primary'>Save</button>
        </div>
    </form>
    )
  }
}

export default AddForm
