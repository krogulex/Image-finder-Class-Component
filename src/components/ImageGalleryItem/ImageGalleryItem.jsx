import React from 'react';
import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isOpen: false,
  };

  show = () => this.setState({ isOpen: true });

  hide = (event) => {
    console.log(event)
    console.log(event.currentTarget)
    this.setState({ isOpen: false });
  }

  render() {
    const { image } = this.props;

// Poprawić, bo to <li> jest w div

    return (
      <div>
        <li
          className="ImageGalleryItem"
          onClick={this.show}
        >
          <img
            className="ImageGalleryItem-image"
            src={image.webformatURL}
            alt={image.pageURL}
          />
        </li>
        <Modal image={image} state={this.state}  hide={this.hide} show={this.show}/>
      </div>
    );
  }
}
