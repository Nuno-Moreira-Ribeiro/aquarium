import React, { Ref, useEffect, useRef, useState } from "react";
import Robot from './Robot';
import './Sidebar.css'


export function Sidebar(){
   
        const robotData = [
          { id: 1, angVelo: 0.5, linVelo: 2.0 },
          { id: 2, angVelo: 0.8, linVelo: 1.5 },
          { id: 3, angVelo: 0.8, linVelo: 1.5 },
          { id: 4, angVelo: 0.8, linVelo: 1.5 },
          { id: 5, angVelo: 0.8, linVelo: 1.5 },
          { id: 6, angVelo: 0.8, linVelo: 1.5 },
        ];
  return (
    <div>
      <button>Robots</button>
      <button>Stats</button>
      <button>CRAbE</button>
         {robotData.map((robot) => (
        <Robot id={robot.id} angVelo={robot.angVelo} linVelo={robot.linVelo} />
      ))}
    </div>
  );
}
