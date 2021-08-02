import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { clubKitSlice } from '../features/Clubkits/clubkits';
import { intKitSlice } from '../features/Intkits/intkits';
import { otherKitSlice } from '../features/Otherkits/otherkits';
import { userSlice } from '../features/User/user';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    clubkits: clubKitSlice.reducer,
    intkits: intKitSlice.reducer,
    otherKits: otherKitSlice.reducer,
    user: userSlice.reducer
  },
});
