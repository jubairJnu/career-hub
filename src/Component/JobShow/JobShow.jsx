import React from 'react';
import './jobshow.css'
const JobShow = ({job}) => {
  const {jobTitle,companyName,remoteOrOnsite,location,fulltimeOrPartTime,salary} = job;
  return (
    <div className='jobshowing'>
      <h5> {jobTitle}</h5>
      <small>{companyName}</small>
    </div>
  );
};

export default JobShow;