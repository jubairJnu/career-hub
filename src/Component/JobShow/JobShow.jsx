import React from 'react';
import './jobshow.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faLocationDot } from '@fortawesome/free-solid-svg-icons';


const JobShow = ({job}) => {
  const {companyLogo,jobTitle,companyName,remoteOrOnsite,location,jobTypes,salary} = job;
  return (
    <div className='jobshowing'>
      <img src={companyLogo} alt="" />
      <h5> {jobTitle}</h5>
      <small >{companyName}</small>
      <p><span className='job-type'> {remoteOrOnsite}</span>
      <span className='job-type'> {jobTypes}</span></p>
      <span className='sign'>
     <span> <FontAwesomeIcon icon={faLocationDot} /> {location} </span>  
      <span><FontAwesomeIcon icon={faDollarSign} />  {salary} </span>
      </span>
      <div>
      <button className='btn-view'>View Details</button>
      </div>
    </div>
  );
};

export default JobShow;