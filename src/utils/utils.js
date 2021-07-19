const cutDescription=(description, length)=>description.substr(0, length);

const dateFormatter=(date)=>new Date(date).toLocaleDateString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

export {cutDescription, dateFormatter};