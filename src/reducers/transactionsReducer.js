const transactionsReducer = (state = {}, action) => {
    switch (action.type) {
      case "LOAD_TRANSACTION_DETAILS": {
        return {
          ...state,
          data: undefined,
          error: undefined,
          isLoading: true,
        };
      }
      case "RETRIEVE_TRANSACTION_DETAILS_SUCCESS": {
        const transaction = action.payload;
        return {
          ...state,
          data: {
            ...state.data,
            ...transaction
          },
          isLoading: false,
        };
      }
      case "RETRIEVE_TRANSACTION_DETAILS_FAILURE": {
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
  
  export default transactionsReducer;