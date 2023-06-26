import { World } from "./world"
import { Annotation } from "./annotation"

export interface CrabeState {
  world: World
  annotations: Record<string, Annotation>
}
