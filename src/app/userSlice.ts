import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import db from '../firebase';

type userState = {
  username: string | null;
  displayname: string | null;
  userEmail: string | null;
  photoURL: string;
  userId: string | null;
};

const initialState: userState = {
  username: null,
  userEmail: null,
  displayname: null,
  photoURL: '/images/user.svg',
  userId: null,
};

export const fetchUserDetails = createAsyncThunk(
  'user/fetchUserDetails',
  async (userId: any) => {
    const response = await db
      .collection('users')
      .where('userId', '==', userId)
      .get();

    const data = response.docs.map((user) => user.data());
    console.log(data);
    return data[0];
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.userEmail = action.payload.userEmail;
      state.userId = action.payload.userId;
    },
    setUserLogOutState: (state) => {
      state.username = null;
      state.userEmail = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserDetails.fulfilled, (state, action) => {
      console.log(action.payload);
      state.displayname = action.payload?.displayname;
      state.username = action.payload?.username;
    });
  },
});

export const { setActiveUser, setUserLogOutState } = userSlice.actions;

export default userSlice.reducer;
