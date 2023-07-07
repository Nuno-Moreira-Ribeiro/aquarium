import { Ref, useEffect, useRef } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../app/store"
import { GameState } from "../types/world"

export function Sidebar() {
  const world = useSelector((state: RootState) => state.crabe.world)

  const content: Ref<HTMLParagraphElement> = useRef(null)
  const robotsStates: Ref<HTMLParagraphElement> = useRef(null)

  function parseWorldState(gameState: GameState) {
    if (gameState.running) {
      return JSON.stringify(gameState.running)
    }
    if (gameState.stopping) {
      return JSON.stringify(gameState.stopping)
    }
    if (gameState.halted) {
      return JSON.stringify(gameState.halted)
    }
    return ""
  }

  function haveRobotState() {
    const alliesBot = world.alliesBot
    let output: string = ""
    for (const key in alliesBot) {
      const item = alliesBot[key]
      output += "Robot : " + item.id
      if (item) {
        output +=
          "\n\tHas ball : " +
          item.hasBall +
          "\n\tPosition : " +
          item.pose.position[0].toFixed(2) +
          " , " +
          item.pose.position[1].toFixed(2) +
          "\n\tOrientation : " +
          item.pose.orientation.toFixed(2) +
          "\n\tVelocity linear : " +
          item.velocity.linear[0].toFixed(2) +
          " , " +
          item.velocity.linear[1].toFixed(2)
        // "\n\tVelocity angular : " +
        // item.velocity.angular +
        // "\n\tRobot information : " +
        // item.robotInfo
      }
      output += "\n\n"
    }
    return output
  }

  useEffect(() => {
    if (world == null) return
    if (content.current == null) return
    if (robotsStates.current == null) return
    content.current.innerText = parseWorldState(world.data.state)
    robotsStates.current.innerText = haveRobotState()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [world])

  return (
    <div>
      <p ref={content}></p>
      <p ref={robotsStates}></p>
    </div>
  )
}
