import { Component } from 'react';

export class Modal extends Component {

  state = {
    isModal: false
  };

  constructor(props){
    super(props);
    this.escFunction = this.escFunction.bind(this);
  }
  escFunction(event){
    if (event.key === "Escape") {

      return this.props.hideModal()
      //Do whatever when esc is pressed
    }
  }
  componentDidMount(){
    document.addEventListener("keydown", this.escFunction, false);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.escFunction, false);
  }

  render() {
    const { modalImage, hideModal } = this.props;

    return (
      <div className="Overlay" onClick={hideModal} onKeyDown={this.escFunction}>
        <img
          className="Modal-img"
          src={modalImage}
          alt="somt"
        />
      </div>
    );
  }
}
