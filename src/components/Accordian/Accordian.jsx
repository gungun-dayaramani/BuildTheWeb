import React from 'react';
import "./Accordian.css";
import data from "../../data";
import AccordianContainer from "../AccordianContainer/AccordianContainer";
//import data from '../../data';

const Accordian = () => {
  return (
    <div className='accordian'>
      <h2>Explore options near me</h2>
      {data.map((question) => (
        <AccordianContainer question={question} key={question.id} Title={question.Title} />
      ))}
    </div>
  );
};

export default Accordian;
