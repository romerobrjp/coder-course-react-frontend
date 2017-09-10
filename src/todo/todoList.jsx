import React from 'react'
import IconButton from '../template/iconButton'

export default props => {
  const renderRows = () => {
    const list = props.list || []

    return list.map(todo => (
      <tr key={todo._id}>
        <td className={todo.done ? 'markAsDone' : ''}>{todo.description}</td>
        <td>
          <IconButton 
            hide={todo.done}
            icon='check' 
            onClick={() => props.handleMarkAsDone(todo)}
            style='success' 
          >
          </IconButton>

          <IconButton 
            hide={!todo.done}
            icon='undo' 
            onClick={() => props.handleMarkAsPending(todo)}
            style='warning' 
          >
          </IconButton>

          <IconButton 
            hide={!todo.done}
            icon='trash-o' 
            onClick={() => props.handleRemove(todo)}
            style='danger' 
          >
          </IconButton>

        </td>
      </tr>
    ))
  }

  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Description</th>
          <th className='tableActions'>Actions</th>
        </tr>
      </thead>

      <tbody>
        {renderRows()}
      </tbody>
    </table>
  )
}