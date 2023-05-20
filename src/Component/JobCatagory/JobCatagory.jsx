import React from 'react';
import './JobCatagory.css'
const JobCatagory = ({work}) => {
  const {job, available,img} = work;
  return (
    <div className='one-job'>
      <img src={img} alt="" />
      <h5>{job}</h5>
      <p>{available} <span> Jobs Available</span></p>
      
    </div>
  );
};

export default JobCatagory;