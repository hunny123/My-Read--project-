import React,{ Component } from 'react'
import Bookcard from './Bookcard'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
class BookShelve extends Component {
	static propTypes = {
    book: PropTypes.array.isRequired,
    onUpdate: PropTypes.func.isRequired
  }


render(){
	 


     let curr_read= this.props.book.filter((book)=>{return book.shelf==="currentlyReading"});
     let read= this.props.book.filter((book)=>{return book.shelf==="read"});
     let want_read = this.props.book.filter((book)=>{return book.shelf==="wantToRead"});
          
	return (
		
        <div>
        <div className = "heading1">
      <h1>My Read</h1>
       </div>
		<div className="container pt-4" >

		
		<h2 className="heading2" >Currently Reading</h2>
		
         <Bookcard data = {
         	curr_read
         }
         onUpdate = {this.props.onUpdate}

         />
      
		<h2 className="heading2">Read</h2>

		<Bookcard data = {
         	read
         }
          onUpdate = {this.props.onUpdate}/>
		
		
		<h2 className="heading2">Want To Read</h2>
		   
		<Bookcard data = {
         	want_read
         }
          onUpdate = {this.props.onUpdate}/>
		
		 <Link
            to="/search"
            
            className='fixedbottom '></Link>
		

        </div>

		</div>
		
       

		   );
}}
export default BookShelve