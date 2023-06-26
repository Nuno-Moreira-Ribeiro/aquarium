import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import crabeReducer from "../slices/crabeSlice"
import { clientMiddleware } from "../middleware/clientMiddleware"

export const store = configureStore({
  reducer: {
    crabe: crabeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(clientMiddleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
