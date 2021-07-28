import { USERMODE } from "config/constants/userMode";

export function usersReducer(state = {}, action) {
  switch (action.type) {
    case USERMODE.GETALL_REQUEST:
      return {
        loading: true,
      };
    case USERMODE.GETALL_SUCCESS:
      return {
        items: action.users,
      };
    case USERMODE.GETALL_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}
