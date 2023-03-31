//redux
import { resetMessage } from "../slices/photoSlice";

export const userResetComponentMessage = dispatch => {
  return () => {
    setTimeout(() => {
      dispatch(resetMessage())
    }, 2000)
  }
}