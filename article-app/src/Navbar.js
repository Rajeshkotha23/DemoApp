import React from 'react'
import './App.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
        <ul className='nav'>
        <img src='https://logos-download.com/wp-content/uploads/2021/01/Yahoo_News_Logo.png'  width='100px' className='logo'/>
     <Link to="/"><h3 className='menu'>Apple</h3></Link>
     <Link to="/streetjournals"><h3 className='menu'>StreetJournals</h3></Link>
     <Link to="/techcrunch"><h3 className='menu'> TechCrunch</h3></Link>
     <Link to="/tesla"><h3 className='menu'>Tesla</h3></Link>
     <Link to="/us"><h3 className='menu'>US</h3></Link>
     </ul>

    </div>
  )
}

export default Navbar
