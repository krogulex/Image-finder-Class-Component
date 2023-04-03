import { ThreeDots } from 'react-loader-spinner';
import { Component } from 'react';

export class Loader extends Component {
  render() {

    return (
      <div className="Loader">
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#3f51b5"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    );
  }
}
