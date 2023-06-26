import { Ref, useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../app/store"
import { drawBall, drawBot, drawField } from "../field/field";

export function Field() {
  const world = useSelector((state: RootState) => state.crabe.world)

  const canvasRef: Ref<HTMLCanvasElement> = useRef(null)

  // TODO: Remove this field
  let field = {
    width: 6.0,
    length: 9.0,
  }

  function initCanvas(context: CanvasRenderingContext2D) {
    context.canvas.width = window.innerWidth - 30
    context.canvas.height = window.innerHeight - 30
    clearCanvas(context)

    let x = (0.8 * context.canvas.width) / field.length
    let y = (0.8 * context.canvas.height) / field.width
    let scale_factor = (x + y) / 2

    context.translate(context.canvas.width / 2, context.canvas.height / 2)
    context.scale(scale_factor, -scale_factor)
  }

  function clearCanvas(context: CanvasRenderingContext2D) {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height)
  }

  useEffect(() => {
    if (world === null) return
    const canvas = canvasRef.current
    if (canvas == null) return
    const context = canvas.getContext("2d")
    if (context == null) return
    initCanvas(context)
    context.strokeStyle = "#fff"
    context.lineWidth = 0.01 // TODO: LineWidth
    drawField(context, world.geometry, world.teamColor)
    drawBot(context, world.alliesBot, world.enemiesBot, world.teamColor)
    if (world.ball !== null) drawBall(context, world.ball)
  }, [field, world])

  return <canvas ref={canvasRef}></canvas>
}
