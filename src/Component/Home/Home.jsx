import React from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import JobCatagory from '../JobCatagory/JobCatagory';
import FeaturesJobs from '../FeaturesJob/FeaturesJobs';
const Home = () => {
  const jobs = useLoaderData();



  return (
    <div>
      <main className='container flex main'>
        <div className="text">
          <h1>One Step <br></br>Closer To Your <br />
            <span className='purple'> Dream Job</span>
          </h1>
          <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
          <button className='btn-linier'>Get Started</button>
        </div>

        <div className="image">
          <img src="https://i.ibb.co/89ZrWBC/main-image.jpg" alt="" />
        </div>
      </main>

      {/* // job catargory section */}

      <section className='job-catagory text-center'>
        <h2>Job Category List</h2>
        <p className='text-center'><small>Explore thousands of job opportunities with all the information you need. Its your future</small></p>
        {/* job features */}
        <div className="job-list">
          {
            jobs.map(work => <JobCatagory
              key={work.id}
              work={work}
            ></JobCatagory>)
          }
        </div>

      </section>

      {/* features jobs */}

      <section className='featuesJobs text-center'>
        <FeaturesJobs></FeaturesJobs>
      </section>

      {/* home div closssing */}
    </div>
  );
};

export default Home;