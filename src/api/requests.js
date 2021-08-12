import { useMutation, useQuery } from "react-query";

import { requestOptions } from "api/requestOptions";

const useRecipients = ({ noteId, email, personName }) =>
  useQuery(
    ["recipients", noteId, email, personName],
    () =>
      requestOptions.getRecipientsOfNote({
        note_id: noteId,
        user_id: email,
      }),
    {
      enabled: !personName.length,
    }
  );
const useSharedNotes = () =>
  useQuery("getNotes", () => requestOptions.sharedNotes({ pageParam: 0 }));

export { useRecipients, useSharedNotes };
