import { ADD_ITEM, UPDATE_ITEM, LOAD_ITEMS, UPDATE_FILTER, SHOW_COMPLETED } from './actions';

const DEFAULT_STATE = {
  items: [

  ],
  filter: '',
  showCompleted: false,
}

const reducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, items: [...state.items, action.payload] };
    case LOAD_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    case UPDATE_ITEM:
      return {
        ...state,
        items: state.items.map(item =>
          item.id !== action.payload.id
            ? item
            : {
              ...item,
              ...action.payload,
            },
        )
      };
    case UPDATE_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    case SHOW_COMPLETED:
      return {
        ...state,
        showCompleted: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
