import { INCREMENT, DECREMENT, RESET } from "../constants/ActionsType";

const initialState = {
  count: 0
};
export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        count:state.count + 1 
      };
    case DECREMENT:
      return {
        count : (state.count >1) ? state.count - 1 :0
      };
    case RESET:
      return {
        count: 0
      };
    default:
      return state;
  }
}
