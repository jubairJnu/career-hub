import React from 'react';
import './JobCatagory.css'


const JobCatagory = ({work}) => {
  const {job, available,picture} = work;
  return (
    <div className='one-job'>
      <img src={picture} alt="img" />
      <h5>{job}</h5>
      <p>{available} <span> Jobs Available</span></p>
      
    </div>
  );
};

export default JobCatagory;