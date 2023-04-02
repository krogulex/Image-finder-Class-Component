import { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export class Modal extends Component {
  render() {
    const { image, state, hide, show } = this.props;

/*     escFunction = (event) => {
        if (event.key === "Escape") {
          //Do whatever when esc is pressed
        }
      };
      componentDidMount() {
        document.addEventListener("keydown", this.escFunction, false);
      };
 */
    return (
      <div>
        {state.isOpen === true ? (
          <div
            className="Modal"
            onClick={hide}
            onKeyDown={hide}
          >
            <div className="ModalContent">
              <img
                className="ImageGalleryItem-image-modal"
                src={image.largeImageURL}
                alt={image.pageURL}
              />
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}
