import React, { useEffect, useState } from 'react';
import JobShow from '../JobShow/JobShow';
import './FeaturesJobs.css'
const FeaturesJobs = () => {

  const [jobs , setJobs] = useState([]);
  useEffect(() =>{
    const  featurejob = ()=>{
      fetch('featuresJobs.json')
      .then(res => res.json())
      .then(data => setJobs(data));
  
      
    }
    featurejob();
     }    
     ,[] )

  
  return (
    <div >

         <div className='jobfeature'>
         <h2>Features Jobs</h2>
      <small>Explore thousands of job opportunities with all the information you need. Its your future</small>
         </div>
      
      <div className='grid container'>
     
       {
        jobs.map(job => <JobShow
        key={job.id}
        job={job}
        >

        </JobShow>
        
        )
       }
      </div>
    </div>
  );
};

export default FeaturesJobs;