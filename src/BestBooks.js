import React from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import { CarouselItem } from "react-bootstrap";
import { Card,Button } from "react-bootstrap";

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }
  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  componentDidMount = () => {
    axios
      .get(`http://localhost:3001/getBooks`)
      .then((result) => {
        console.log(result.data);
        this.setState({
          books: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  addBooks = (event) => {
    event.preventDefault();
    const obj = {
      bookTitle: event.target.bookTitle.value,
      bookDiscreption: event.target.bookDiscreption.value,
      bookStatus: event.target.bookStatus.value,
    };
    axios
      .post(`http://localhost:3001/addBooks`, obj)
      .then((result) => {
        this.setState({
          books: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  deleteBooks = (id) => {
    axios
      .delete(`http://localhost:3001/deleteBooks/${id}`)
      .then((result) => {
        this.setState({
          books: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    /* TODO: render all the books in a Carousel */

    return (
      <div>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {/* <form onSubmit={this.addBooks}>
          <input type="text" name="bookTitle" placeholder="Book name" />
          <input type="text" name="bookDiscreption" placeholder="Book name" />
          <input type="text" name="bookStatus" placeholder="Book name" />
          <button type="submit">ADD</button>
        </form> */}

        <Card className="text-center">
      <Card.Header>Add books</Card.Header>
      <Card.Body>
        <Card.Title>Here you cam add any books you need!</Card.Title>
        <form onSubmit={this.addBooks}>
        <input type="text" name="bookTitle" placeholder="Book name" />
          <input type="text" name="bookDiscreption" placeholder="Book name" />
          <input type="text" name="bookStatus" placeholder="Book name" />
          <Button type="submit">Add books</Button>
          </form>
      </Card.Body>
      <Card.Footer className="text-muted">Thank you for adding your favorite book</Card.Footer>
    </Card>

        {this.state.books.map((item) => {
          return (
            <div>
              <h3>Book title : {item.title} </h3>
              <p>description : {item.discreption}</p>
              <p>status : {item.status}</p>
              <button onClick={() => this.deleteBooks(item._id)}>Delete</button>
            </div>

            // <Carousel>
            //   <Carousel.Item>
            //     <img
            //       className="d-block w-100"
            //       src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH4AqAMBIgACEQEDEQH/xAAWAAEBAQAAAAAAAAAAAAAAAAAAAQf/xAAVEAEBAAAAAAAAAAAAAAAAAAAAAf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AxEEAAAAABQRQQEVFCKigAIKgKoAIAAlAAFQAUFQVBFAQABRFQRRFUAEABQBQRFAQAFQBVQEAAFEUAAEFRUAEBRFFAFAEABRABABFAAABFEUUEUEUAABABQARQABFAQAQAAAAAUURUUAAAAAAAUAEABRKKiIAKAAAABABQEUAAAABQQAABQQoIAAAIAAACgqKgACgKCAKgAACAUAAAAAAFQAFUARAFFAAf//Z"
            //       alt="{item.title}"
            //     />
            //     <Carousel.Caption>
            //       <h3>{item.title}</h3>
            //       <p>{item.description}</p>
            //       <p>status: {item.status}</p>
            //     </Carousel.Caption>
            //   </Carousel.Item>
            // </Carousel>
          );
        })}
      </div>
    );
  }
}
export default BestBooks;
