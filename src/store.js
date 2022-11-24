import { configureStore } from '@reduxjs/toolkit'
import userReduxConfig from './reduxConfig'

// [
//   { id: 234, name: 'testing', email: 'testing@gmail.com' },
// ]

export const store = configureStore({
  reducer: {
    usersInformation: userReduxConfig,
  },
})
