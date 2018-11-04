const ADDAUTHOR = "ADDAUTHOR";
const DELETEAUTHOR = "DELETEAUTHOR";

export const ADD_AUTHOR = newAuthor =>{
// newAuthorId => {
//   let newAuthor = {
//     first_name: "Author",
//     last_name: `${this.state.newAuthorId}`,
//     imageUrl:
//       "https://www.netz.de/images/2016-11-21-firefox-focus-header-58cfedd908c25_500_300.jpg",
//     books: [
//       {
//         title: "Anonymous book",
//         color: "mysterious color"
//       }
//     ]
//   };
  return {
    type: ADDAUTHOR,
    payload: newAuthor
  };
};

export const DELETE_AUTHOR = author => {
  return {
    type: DELETEAUTHOR,
    payload: author
  };
};
