import React from 'react';
import './Recommendations.css';
import chrisProfilePic from '../images/vas.jpeg'; // Adjust the path based on your directory structure

const Recommendations: React.FC = () => {
  return (
    <div className='timeline-container'>
      <div className="recommendation-card">
        <div className="recommendation-header">
          <img src={chrisProfilePic} alt="Vasudha Tapriya" className="profile-pic" />
          <div>
            <h3>Vasudha Tapriya</h3>
            <p>Product @ Morgan Stanley</p>
            <p className="date">May 5, 2025</p>
          </div>
        </div>
        <div className="recommendation-body">
          <p>"Pranjal is an outstanding graphic designer who combines creativity with precision.</p>
         <p></p> 
<p>His disciplined approach ensures timely delivery without compromising on quality. </p>
          <p></p>
<p>Collaborating with him is seamless, he communicates effectively, embraces feedback, and consistently exceeds expectations!"</p>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
