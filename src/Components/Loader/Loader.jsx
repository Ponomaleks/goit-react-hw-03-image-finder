import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import React from 'react';

export default class LoaderEl extends React.Component {
  //other logic
  render() {
    return <Loader type="Grid" color="#3746a6" height={80} width={80} />;
  }
}
