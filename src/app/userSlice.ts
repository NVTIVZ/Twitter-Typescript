import { createSlice } from '@reduxjs/toolkit';

type userState = {
  userName: string | null;
  userEmail: string | null;
  photoURL: string;
  userId: string | null;
};

const initialState: userState = {
  userName: null,
  userEmail: null,
  photoURL: '/images/user.svg',
  userId: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.userName = action.payload.userName;
      state.userEmail = action.payload.userEmail;
      state.photoURL = action.payload.photoURL;
      state.userId = action.payload.userId;
    },
    setUserLogOutState: (state) => {
      state.userName = null;
      state.userEmail = null;
    },
  },
  extraReducers: {},
});

export const { setActiveUser, setUserLogOutState } = userSlice.actions;

export default userSlice.reducer;
