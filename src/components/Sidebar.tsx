import React, { useState } from "react";
import Robot from './Robot';
import './Sidebar.css';

enum EdisplayMode {
  Robot,
  Stats,
  CRAbE
}

const robotData = [
  { id: 1, angVelo: 0.5, linVelo: 2.0 },
  { id: 2, angVelo: 0.8, linVelo: 1.5 },
  { id: 3, angVelo: 0.8, linVelo: 1.5 },
  { id: 4, angVelo: 0.8, linVelo: 1.5 },
  { id: 5, angVelo: 0.8, linVelo: 1.5 },
  { id: 6, angVelo: 0.8, linVelo: 1.5 },
];

export function Sidebar() {
  const [displayMode, setDisplayMode] = useState(EdisplayMode.Robot);

  function changeDisplayToRobot() {
    setDisplayMode(EdisplayMode.Robot);
  }

  function changeDisplayToStats() {
    setDisplayMode(EdisplayMode.Stats);
  }

  function changeDisplayToCrabe() {
    setDisplayMode(EdisplayMode.CRAbE);
  }

  function display() {
    switch (displayMode) {
      case EdisplayMode.Robot:
        return (
          <>
            {robotData.map((robot) => (
              <Robot key={robot.id} id={robot.id} angVelo={robot.angVelo} linVelo={robot.linVelo} />
            ))}
          </>
        );
      case EdisplayMode.Stats:
        return;
      case EdisplayMode.CRAbE:
        return;
      default:
        return null;
    }
  }

  return (
    <div>
      <button onClick={changeDisplayToRobot}>Robots</button>
      <button onClick={changeDisplayToStats}>Stats</button>
      <button onClick={changeDisplayToCrabe}>CRAbE</button>
      {display()}
    </div>
  );
}
