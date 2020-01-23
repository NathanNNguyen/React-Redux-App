import React from 'react';

import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { fetchImage } from '../actions';

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    image: state.image,
    status: state.status
  }
}

const Image = props => {
  return (
    <div>
      <button onClick={props.fetchImage}>Try me</button>
      {!props.image && !props.isLoading && (
        <h3>Click the button</h3>
      )}
      {props.isLoading && (
        <Loader
          type="BallTriangle"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />)}
      {props.image && !props.isLoading &&
        (<img alt='dog-img' src={props.image.message}>
          {props.image.message}
        </img>)}
    </div>
  )
}

export default connect(
  mapStateToProps,
  { fetchImage },
)(Image);