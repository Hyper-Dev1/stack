import React from "react";
// import { useState } from "react";
// import Phonebook from "./components/Phonebook";

const App = (props) => {
  const tutor = [{ title: "part0", courses: [{ Title: "def", Hour: 2 }] }];

  return (
    <>
    {tutor[0].title}
    <ul>
      <li>{tutor[0].courses[0].Title}</li>
    </ul>
    </>
  );
};

export default App;
