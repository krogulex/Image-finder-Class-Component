import { Component } from 'react';

export class Modal extends Component {
  render() {
    const { modalImage, hideModal } = this.props;

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
          <div className='Modal-div'>
            <div className="Modal-backdrop" onClick={hideModal}></div>
            <div className="Modal">
              <div className="ModalContent">
                <img
                  className="ImageGalleryItem-image-modal"
                  src={modalImage}
                  alt="somt"
                />
              </div>
            </div>
          </div>
    );
  }
}
