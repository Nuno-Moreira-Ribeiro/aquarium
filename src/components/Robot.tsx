import React from 'react';
import './Robot.css'
import imgBase from '../icon.png'

interface RobotProps {
  id: number;
  angVelo: number;
  linVelo: number;
}

const Robot: React.FC<RobotProps> = ({ id, angVelo, linVelo }) => {
  return (
    <div className="mainRobot">
      <img id="imgRobot"src={imgBase} alt="robot" />
      <div className="infos">
      <p className="info id">ID : {id}</p>
      <p className="info angularVelocity">Angular Velocity : {angVelo} rad/s</p>
      <p className="info linearVelocity">Linear Velocity : {linVelo} m/s</p>
      </div>
    </div>
  );
};

export default Robot;
