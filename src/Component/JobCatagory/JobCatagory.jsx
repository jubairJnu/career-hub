import React from 'react';

const JobCatagory = ({work}) => {
  const {job, available} = work;
  return (
    <div>
      <h5>{job}</h5>
      <p>{available} <span> Jobs Available</span></p>
    </div>
  );
};

export default JobCatagory;