import { ALERTMODE } from "config/constants/alertMode";

export const alertReducer = (state = {}, action) => {
  switch (action.type) {
    case ALERTMODE.SUCCESS:
      return {
        type: "success",
        message: action.message,
      };
    case ALERTMODE.ERROR:
      return {
        type: "error",
        message: action.message,
      };
    case ALERTMODE.CLEAR:
      return {};
    default:
      return state;
  }
};
