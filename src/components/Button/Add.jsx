import React from 'react'
import './Add.css'

const Add = (props) => {
  return (
    <form>
        <input input={props.id} defaultValue={1} />
        <button>+Add</button>
    </form>
  )
}

export default Add