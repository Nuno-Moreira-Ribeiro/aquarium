import type { Circle, Line, Point, Rectangle } from "./geometry"

export type CircleAnnotation = {
  kind: AnnotationKind.Circle
  content: Circle
}

export type LineAnnotation = {
  kind: AnnotationKind.Line
  content: Line
}

export type RectangleAnnotation = {
  kind: AnnotationKind.Rectangle
  content: Rectangle
}

export type PointAnnotation = {
  kind: AnnotationKind.Point
  content: Point
}

export type Annotation =
  | CircleAnnotation
  | LineAnnotation
  | PointAnnotation
  | RectangleAnnotation

export enum AnnotationKind {
  Line = "line",
  Point = "point",
  Rectangle = "rectangle",
  Circle = "circle",
}
