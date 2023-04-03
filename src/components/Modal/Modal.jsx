import { Component } from 'react';

export class Modal extends Component {
  render() {
    const { image, state, hide } = this.props;

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
          <div className='Modal-div'>
            <div className="Modal-backdrop" onClick={hide}></div>
            <div className="Modal">
              <div className="ModalContent">
                <img
                  className="ImageGalleryItem-image-modal"
                  src={image.largeImageURL}
                  alt={image.pageURL}
                />
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}
