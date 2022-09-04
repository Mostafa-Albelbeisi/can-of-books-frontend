import React from 'react';
import axios from 'axios';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  componentDidMount = () =>{
    axios
    .get(`http://localhost:3001/getBooks`)
    .then(result => {
      console.log(result.data);
      this.setState({
        books : result.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <>


        <div> 
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        {this.state.books.map(item => {
          <div>
            <h3>Book title: {item.title}</h3>
            <h3>Book description: {item.discreption}</h3>
            <h3>Book status: {item.status}</h3>
          </div>
        })}
        </div>

        {/* {this.state.books.length ? (
          <p>Book Carousel coming soon</p>
        ) : (
          <h3>No Books Found :(</h3>
        )} */}
        
      </>
    )
  }
}

export default BestBooks;
