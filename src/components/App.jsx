import axios from 'axios';
import React, { Component } from 'react';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const per_page = 12;
export class App extends Component {
  state = {
    images: [],
    search: '',
    isLoading: false,
    isModal: false,
    page: 1,
    totalHits: 0,
    modalImage: '',
  };

  fetchImages = async (search, page) => {
    try {
      const response = await axios.get(
        `?key=33188868-874ed4f4ba7cc47db513adf3f&q=${search}&per_page=${per_page}&page=${page}`
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  loadImages = () => {
    const { search, page } = this.state;

    this.setState({ isLoading: true });
    setTimeout(() => {
      this.fetchImages(search, page)
        .then(images => {
          this.setState(prevState => ({
            images: [...prevState.images, ...images.data.hits],
            totalHits: images.data.totalHits,
          }));
        })
        .catch(error => console.log(error))
        .finally(() => this.setState({ isLoading: false }));
    }, 1000);
  };

  //Component Update
  async componentDidUpdate(prevProps, prevState) {
    if (this.state.search !== prevState.search && this.state.search !== '') {
      this.setState({ images: [], page: 1 });
      this.loadImages();
    }
    if (prevState.page !== this.state.page && this.state.page !== 1) {
      this.loadImages();
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  /*   async componentDidMount() {
    this.loadImages();
  } */

  handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const input = event.target.input.value;
    form.reset();
    this.setState({ search: input });
  };

  showModal = (event)=> {
    this.setState({ isModal: true,   modalImage: event });
  };

  hideModal = event => {
    this.setState({ isModal: false });
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleSubmit} onChange={this.handleChange} />
        <div>
          <ImageGallery images={this.state.images} showModal={this.showModal} />
          {this.state.isLoading && <Loader />}
          {this.state.images.length > 0 &&
            this.state.images.length < this.state.totalHits &&
            this.state.isLoading === false && (
              <Button handleLoadMore={this.handleLoadMore} />
            )}
        </div>
        {this.state.isModal && (
            <div className='Modal'>
            <Modal
              modalImage={this.state.modalImage}
              hideModal={this.hideModal}
            />
            </div>
          )}
      </div>
    );
  }
}
