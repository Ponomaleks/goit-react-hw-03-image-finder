import './App.css';
import { Component } from 'react';

import Searchbar from './Components/Searchbar/Searchbar';
import API from './Servises/API';
import ImageGallery from './Components/ImageGallery';
import Button from './Components/Button';
import LoaderEl from './Components/Loader';

const statuses = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

class App extends Component {
  state = {
    req: '',
    page: 1,
    images: [],
    status: 'pending',
  };

  handleSubmit = request => {
    this.setState({ req: request, page: 1 });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.req !== this.state.req) {
      this.searchImages();
    }
  }

  searchImages = () => {
    API(this.state.req, this.state.page, this.setImages);
    //   .then(response => {
    //   this.setState({ images: response.data.hits });
    // });
  };

  setImages = images => {
    this.setState({ images: images });
    this.setState({ status: statuses.RESOLVED });
  };

  render() {
    const { images, status } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSubmit} />
        {status === 'pending' && <LoaderEl />}
        {status === 'resolved' && <ImageGallery cards={images} />}
        {/* {if(this.state.images.length>1){<Button></Button>}} */}
      </div>
    );
  }
}

export default App;
