import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

class UpdateForm extends React.Component {
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update books</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.props.updateBooks}>
            <Form.Group className="mb-3" controlId="bookTitle">
              <Form.Label>Book title</Form.Label>
              <Form.Control
                type="text"
                placeholder="book title"
                name="bookTitle"
                defaultValue={this.props.currentBooks.title}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="bookDiscreption">
              <Form.Label>Book discreption</Form.Label>
              <Form.Control
                type="text"
                placeholder="Book discreption"
                name="bookDiscreption"
                defaultValue={this.props.currentBooks.discreption}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="bookStatus">
              <Form.Label>Book status</Form.Label>
              <Form.Control
                type="text"
                placeholder="Book status"
                name="bookStatus"
                defaultValue={this.props.currentBooks.status}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              update
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

export default UpdateForm;
