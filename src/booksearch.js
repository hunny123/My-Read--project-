import React,{ Component } from 'react'
import Bookcard from './Bookcard'
import * as BooksAPI from "./BooksAPI";

import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';


class Booksearch extends Component {
	static propTypes = {
    data: PropTypes.array.isRequired,
    onUpdate: PropTypes.func.isRequired
  }
 state = {
    query:'',
    book:[]
   
  }
  
  
  updateQuery = (query) => {
   

    let value =query
    this.setState({query: value}) 
    
    this.search(value)
    
    
  }
  noneBook = (books) => {
     let everyooks = this.props.data
    
    for (let book of books) {
      book.shelf = "None"
    }

    for (let book of books) {
      for (let b of everyooks) {
        if (b.id === book.id) {
          book.shelf = b.shelf
        }
      }
    }
    return books
  }
  search= (value) => {

    if (value.length !== 0) {
      BooksAPI.search(value).then((books) => {
        if (books.length > 0) {
           books = books.filter((book) => (book.imageLinks))
           books = this.noneBook(books)
            this.setState({book:books})

         
        }
      })
    } else {
      this.setState({book: [], query: ''})
      this.render()
    }
  }
    
     
      
    
    
	
  
	render(){

    


	
      
    
		

		return(
          <div>
          <div className='search-book'>
          <Link
            to="/"
            className="left"
            >  </Link>
          <input
            className=''
            type='text'
            placeholder='Search contacts'
           value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}
          
            
          />

          </div>
        
          <Bookcard data = {
           this.state.book
          
            
         }
         onUpdate = {this.props.onUpdate}
         />

           </div>
			);
	}}
export default Booksearch;	