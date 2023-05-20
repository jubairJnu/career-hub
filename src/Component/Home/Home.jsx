import React from 'react';
import './Home.css'
const Home = () => {
  return (
    <main className='container flex main'>
      <div className="text">
        <h1>One Step <br></br>Closer To Your <br/>
          <span> Dream Job</span>
        </h1>
        <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
      </div>

    <div className="image">
      <img src="/src/Component/image/main image.jpg" alt="" />
    </div>
    </main>
  );
};

export default Home;