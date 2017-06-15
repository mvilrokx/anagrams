import React from 'react'

const FilterForm = ({filterText, onUserInput}) => {

  const handleFilterChange = e => onUserInput(e.target.value)

  return (
    <form>
      <input
        id='filter-input'
        className='input'
        type='text'
        value={filterText}
        onChange={handleFilterChange}
        placeholder='Enter filter...'
      />
    </form>
  )
}

export default FilterForm
