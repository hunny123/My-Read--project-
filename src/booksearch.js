import React,{ Component } from 'react'
import Bookcard from './Bookcard'

import escapeRegExp from 'escape-string-regexp'

import PropTypes from 'prop-types';
import sortBy from 'sort-by'
class Booksearch extends Component {
	static propTypes = {
    data: PropTypes.array.isRequired,
    onUpdate: PropTypes.func.isRequired
  }
 state = {
    query:''
    
  }
  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }
  
	
	render(){
		
		let showingbooks
        if (this.state.query) {
         const match = new RegExp(escapeRegExp(this.state.query), 'i')
      showingbooks = this.props.data.filter((book) => match.test(book.title))
     
      } else {
      showingbooks = [];
    }
     showingbooks.sort(sortBy('title'))
		return(
          <div>
          
          <input
            className='search-book'
            type='text'
            placeholder='Search contacts'
           value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}
          
            
          />
          
          
          <Bookcard data = {
         	showingbooks
         }
         onUpdate = {this.props.onUpdate}
         />

           </div>
			);
	}}
export default Booksearch;	