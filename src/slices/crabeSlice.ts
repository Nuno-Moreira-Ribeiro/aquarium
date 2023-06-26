import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { World } from "../types/world"
import { Annotation } from "../types/annotation"
import { ToolMessage } from "../types/message"
import { convertArrayToObject, parseWorld } from "../helpers/parser";
import { Command } from "../types/command"
import { CrabeState } from "../types/state"
export const crabeSlice = createSlice({
  name: "crabe",
  initialState: {} as CrabeState,
  reducers: {
    receiveData(state, action: PayloadAction<ToolMessage>) {
      console.log(action.payload)
      return {
        world: parseWorld(action.payload.world),
        annotations: convertArrayToObject(action.payload.data.annotations),
      }
    },
  },
})

export const { receiveData } = crabeSlice.actions

export default crabeSlice.reducer
