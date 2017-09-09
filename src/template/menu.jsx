import React from 'react'

export default props => (
  <nav className='navbar navbar-inverse bg-inverse'>
    <div className='container'>
      <div className='navbar-header'>
        <a className='navbar-brand' href="#">
          <i className='fa fa-calendar-check-o'></i> TodoApp
        </a>
      </div>

      <div id='navbar' className='navbar-collapse collapse'>
        <ul className='nav navbar-nav'>
          <li><a className='nav-link' href="#/todos"></a>Tarefas</li>
          <li><a className='nav-link' href="#/about"></a>Sobre</li>
        </ul>
      </div>
    </div>
  </nav>
)