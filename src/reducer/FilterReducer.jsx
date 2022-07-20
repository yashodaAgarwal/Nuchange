const FilterReducer = (state, action) => {
  switch (action.type) {
    case "SORT":
      return {
        ...state,
        sortBy: action.payload,
      };
    case "CATEGORY":
      return {
        ...state,
        byCategory: action.payload,
      };
    case "Clear_Filter":
      return {
        byCategory: [],
        sortBy: null,
      };
    default:
      return state;
  }
};

export default FilterReducer;
