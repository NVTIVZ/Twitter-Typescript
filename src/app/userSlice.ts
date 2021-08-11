import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import db from '../firebase';

type userState = {
  userName: string | null;
  displayName: string | null;
  userEmail: string | null;
  photoURL: string;
  userId: string | null;
};

const initialState: userState = {
  userName: null,
  userEmail: null,
  displayName: null,
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
    console.log(response);
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
      state.userName = null;
      state.userEmail = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserDetails.fulfilled, (state, action) => {
      state.displayName = action.payload?.displayname;
      state.userName = action.payload?.username;
    });
  },
});

export const { setActiveUser, setUserLogOutState } = userSlice.actions;

export default userSlice.reducer;
