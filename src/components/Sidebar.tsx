import { Ref, useEffect, useRef } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../app/store"
import { GameState } from "../types/world"
export function Sidebar() {
  const world = useSelector((state: RootState) => state.crabe.world)

  const content: Ref<HTMLParagraphElement> = useRef(null)

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

  useEffect(() => {
    if (world == null) return
    if (content.current == null) return
    content.current.innerText = parseWorldState(world.data.state)
  }, [world])

  return <p ref={content}></p>
}
