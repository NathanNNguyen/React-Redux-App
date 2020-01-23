import React from 'react';

import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    image: state.image,
    status: state.status
  }
}

const Image = () => {
  return (
    <div>

    </div>
  )
}

export default connect(
  mapStateToProps,
  {},
)(Image);