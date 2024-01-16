import React from "react"
import "./Robot.css"
import imgBase from "../icon.png"

interface RobotProps {
  id: number
  positionX: number
  positionY: number
  angVelo: number
  linVeloX: number
  linVeloY: number
  orientation: number
  hasBall: boolean
}

const Robot: React.FC<RobotProps> = ({
  id,
  positionX,
  positionY,
  angVelo,
  linVeloX,
  linVeloY,
  orientation,
  hasBall,
}) => {
  return (
    <div className="mainRobot">
      <img id="imgRobot" src={imgBase} alt="robot" />
      <div className="infos">
        <p className="info id">ID : {id}</p>
        <p className="info position">
          Position : {positionX.toFixed(2)} ,{positionY.toFixed(2)}
        </p>
        <p className="info linVelo">
          linear velocity : {linVeloX.toFixed(2)} ,{linVeloY.toFixed(2)}
        </p>
        <p className="info linVelo">angular velocity : {angVelo.toFixed(2)}</p>
        <p className="info orientation">
          Orientation : {orientation.toFixed(2)}
        </p>
        <p className="info hasball">Has ball : {hasBall}</p>
      </div>
    </div>
  )
}

export default Robot
