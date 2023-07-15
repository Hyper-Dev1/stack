import React from "react";

const Course = (props) => {
  const { course } = props;
  const pars = course.parts.map((c) => c.exercises);

  const total = pars.reduce((s, p) => {
    s = s + p;
    return s;
  });

  return (
    <>
      <h1>{course.name}</h1>
      {course.parts.map((c) => (
        <p key={c.id}>
          {c.name} {c.exercises}
        </p>
      ))}
      <p>{total}</p>
    </>
  );
};

export default Course;
