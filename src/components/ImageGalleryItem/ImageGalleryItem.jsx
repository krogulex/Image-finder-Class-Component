import React from 'react';
import { Component } from 'react';

export class ImageGalleryItem extends Component {

  render() {
    const { image, showModal } = this.props;

    return (
        <li
          className="ImageGalleryItem"
          onClick={() => showModal(image.largeImageURL)}
        >
          <img
            className="ImageGalleryItem-image"
            src={image.webformatURL}
            alt={image.pageURL}
          />
        </li>
    );
  }
}
