import React from 'react'
import Navbar from './Navbar';
import "./exploar.css"
import { useLocation } from 'react-router-dom';
const Exploarbbo = () => {
    let book = useLocation().state.item;
  console.log(book)
  return (
   <div className='expoar'>
   <div className="navbar" style={{position:"sticky",top:0,zIndex:9999}}>
    <Navbar />
    </div>

   
             <div className='exploardiv'>              
                 <div className="expolarbook">
                 <table>
                 <tr>
                   <th>Image</th>
                   <th>Name</th>
                   <th>autho</th>
                   <th>gener</th>
                 </tr>

                 <tr>
                   <td><img src={book.image} alt={`${book.name}`} className="expoimg" /></td>
                   <td>{book.name}</td>
                   <td>{book.author}</td>
                   <td>{book.gener}</td>
                 </tr>


                 
                
                 </table>
              </div>
    </div>

   </div>
  )
}

export default Exploarbbo