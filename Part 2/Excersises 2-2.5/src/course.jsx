
import React from 'react';

const Header = (props) => {
    return (
      <div>
        <h1>{props.course} </h1>
      </div>
        
     
    )
  }
  
  const Part = (props) => {
    return (
      <div>
        <p>
          {props.part} {props.exercises}
        </p>
      </div>
        
     
    )
  }
  
  const Content = (props) => {
    return (
      <div>
        {props.parts.map(part =>(
          <Part key={part.id} part={part.name} exercises={part.exercises} />
        ))}
      
      </div>
        
     
    )
  }
  
  
  const Total = (props) => {
    const total = props.parts.reduce((sum, part) => {
      const newSum = sum + part.exercises;
      console.log(`Adding ${part.exercises} exercises from ${part.name}, new total is ${newSum}`);
      return newSum;
    }, 0);
    return (
      <div>
        <strong>Total of {total} exercises</strong>
      </div>
    );
  }
  
  
  
  const Course = (props) => {
    const course = props.course;
    return (
      <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )
  }
  


export default Course;