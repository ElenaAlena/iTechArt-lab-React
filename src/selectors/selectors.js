
import { useStore } from "react-redux";

const useCurrentUser=()=>useStore().getState().authenticationReducer.user;


export const selectors={
    useCurrentUser
}