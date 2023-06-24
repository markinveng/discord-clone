import { configureStore } from '@reduxjs/toolkit'

import userSlice from '../features/userSlices'

const store = configureStore({ reducer: userSlice })