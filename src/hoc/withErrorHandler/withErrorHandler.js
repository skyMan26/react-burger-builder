import React from "react";

import Modal from "../../components/UI/Modal/Modal";
import Auxx from "../Auxx";

const withErrorHandler = WrappedComponent => {
  return props => {
    return (
      <Auxx>
        <Modal>Something didn't work</Modal>
        <WrappedComponent {...props} />
      </Auxx>
    );
  };
};

export default withErrorHandler;
