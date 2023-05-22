import React from 'react';
import './jobshow.css'
const JobShow = ({job}) => {
  const {companyLogo,jobTitle,companyName,remoteOrOnsite,location,fulltimeOrPartTime,salary} = job;
  return (
    <div className='jobshowing'>
      <img src={companyLogo} alt="" />
      <h5> {jobTitle}</h5>
      <small>{companyName}</small>
    </div>
  );
};

export default JobShow;