import { userService } from "utils/userService";

const getNotes = async ({ pageParam = 0 }) => {
  const res = await userService.notes(pageParam);
  return res;
};
const getNotesOptions = {
  getNextPageParam: (lastPage) => (lastPage ? lastPage.nextId : 1 ?? false),
};

const getAllUsers = async ()=>{
  const res = await userService.getAll();
  return res;
}
const getRecipientsOfNote = async ({note_id,user_id})=>{
  const res = await userService.getRecipientsOfNote({note_id: note_id,user_id:user_id});
  return res;
}
const sharedNotes = async ({ pageParam = 0 }) => {
  const res = await userService.sharedNotes(pageParam);
  return res;
};

export const requestOptions = {
  getNotes,
  getNotesOptions,
  getAllUsers,
  getRecipientsOfNote,
  sharedNotes
};
