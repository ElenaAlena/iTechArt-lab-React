const CutDescription=(description, length)=>description.substr(0, length);

const DateFormatter=(date)=>new Date(date).toLocaleDateString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

export {CutDescription, DateFormatter};