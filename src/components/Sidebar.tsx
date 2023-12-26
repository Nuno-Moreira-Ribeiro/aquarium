import React, { useEffect, useState } from "react"
import Robot from "./Robot"
import "./Sidebar.css"
import { useSelector } from "react-redux"
import { RootState } from "../app/store"
import { GameState } from "../types/world"

enum EdisplayMode {
  Robot,
  Stats,
  CRAbE,
}

export function Sidebar() {
  let world = useSelector((state: RootState) => state.crabe.world)
  const [displayMode, setDisplayMode] = useState(EdisplayMode.Robot)

  let [robotData, setRobotData] = useState<
    {
      linVeloX: number
      angVelo: number
      id: number
      positionX: number
      positionY: number
      orientation: number
      hasBall: boolean
    }[]
  >([])
  function haveRobotState() {
    const alliesBot = world.alliesBot
    let robData: {
      id: number
      positionX: number
      positionY: number
      angVelo: number
      linVeloX: number
      linVeloY: number
      orientation: number
      hasBall: boolean
    }[] = []
    for (const key in alliesBot) {
      const item = alliesBot[key]
      const id = item.id
      const positionX = item.pose.position[0]
      const positionY = item.pose.position[1]
      const orientation = item.pose.orientation
      const angVelo = item.velocity.angular
      const linVeloX = item.velocity.linear[0]
      const linVeloY = item.velocity.linear[1]
      const hasBall = item.hasBall
      robData.push({
        id,
        positionX,
        positionY,
        angVelo,
        linVeloX,
        linVeloY,
        orientation,
        hasBall,
      })
    }
    setRobotData(robData)
  }

  const changeDisplayToRobot = () => {
    setDisplayMode(EdisplayMode.Robot)
  }

  const changeDisplayToStats = () => {
    setDisplayMode(EdisplayMode.Stats)
  }

  const changeDisplayToCrabe = () => {
    setDisplayMode(EdisplayMode.CRAbE)
  }

  function displayContent() {
    switch (displayMode) {
      case EdisplayMode.Robot:
        return (
          <div>
            {robotData.map((robot) => (
              <Robot
                key={robot.id}
                id={robot.id}
                positionX={robot.positionX}
                positionY={robot.positionY}
                angVelo={robot.angVelo}
                linVeloX={robot.linVeloX}
                linVeloY={robot.linVeloX}
                orientation={robot.orientation}
                hasBall={robot.hasBall}
              />
            ))}
          </div>
        )
      case EdisplayMode.Stats:
        return <div>Stats</div>
      case EdisplayMode.CRAbE:
        return <div>CRAbE</div>
      default:
        return null
    }
  }
  useEffect(() => {
    if (world == null) return
    haveRobotState()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [world])

  return (
    <div>
      <button onClick={changeDisplayToRobot}>Robots</button>
      <button onClick={changeDisplayToStats}>Stats</button>
      <button onClick={changeDisplayToCrabe}>CRAbE</button>
      {displayContent()}
    </div>
  )
}
