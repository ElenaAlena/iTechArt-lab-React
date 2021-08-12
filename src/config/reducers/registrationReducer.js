import { USERMODE } from "config/constants/userMode";

export const registrationReducer = (state = {}, action) => {
  switch (action.type) {
    case USERMODE.REGISTER_REQUEST:
      return { registering: true };
    case USERMODE.REGISTER_SUCCESS:
      return { registered: true };
    case USERMODE.REGISTER_FAILURE:
      return {};
    default:
      return state;
  }
};
