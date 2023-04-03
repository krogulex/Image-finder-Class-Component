import React from "react";
import { Component } from "react";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

export class ImageGallery extends Component {


    render() {

        const { images, showModal } = this.props

        return (
            <ul className="ImageGallery">
                { images.map( image => {
                    return (
                    <ImageGalleryItem image={image} key={image.id} showModal={showModal}/>)
                })}
            </ul>
        )

    }
}