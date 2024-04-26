const walletReducer = (state = undefined, action) => {
  switch (action.type) {
    case "LOAD_WALLET_DETAILS": {
      return {
        ...state,
        data: undefined,
        error: undefined,
        isLoading: true,
      };
    }
    case "RETRIEVE_WALLET_DETAILS_SUCCESS": {
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    }
    case "RETRIEVE_WALLET_DETAILS_FAILURE": {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default walletReducer;
