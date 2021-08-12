import { queryByTestId, render } from "@testing-library/react";

import Note from "./Note";

describe("<Note>", () => {
  let props;
  const getComponent = () => render(Note, props);

  beforeEach(() => {
    props = {
      note: [
        {
          title: "What is Lorem Ipsum?",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          dateCreation: new Date("Jul 20 2021").toDateString(),
          id: "1",
          authorName: "Anna",
          authorEmail: "some@tut.by",
          order: 1,
        }
      ],
      activeNoteId: "",
      setActiveNoteId: null,
      isEditMode: false,
      setIsEditMode: null,
      isSharedMode: false,
      onDeleteNote: null,
      getAllUsersSuccess: null,
      allUsersData: null,
      setCurrentNote: null,
      dragService: null,
      reOrder: null,
    };
  });

  describe("when note exist", () => {
    it("should render note", () => {
      const { container } = getComponent();
      queryByTestId(container, "notes-list-item");
    });
  });
  describe("when note is null", () => {
    beforeEach(() => {
      props.note = [];
    });

    it("should not render note", () => {
      const { container } = getComponent();
      expect(queryByTestId(container, "notes-list-item")).toBe(null);
    });
  });
});