import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => (
  <div role='form' className='todoForm'>
    <Grid cols='12 9 10'>
      <input 
        id='description' 
        className='form-control' 
        onChange={props.handleChange}
        placeholder='Adicione uma tarefa'
        value={props.description}
      >
      </input>
    </Grid> 
    
    <Grid cols='12 3 2'>
      <IconButton 
        icon='plus' 
        onClick={props.handleAdd}
        style='primary' 
      >
      </IconButton>
    </Grid>
  </div>
)