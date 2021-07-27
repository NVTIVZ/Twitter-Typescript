import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import db from '../firebase';
import firebase from 'firebase';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = db.collection('posts').orderBy('created', 'desc');
  const data = await response.get();
  let arrayText: any = [];
  data.docs.forEach((item) => {
    let toFormat = item.data();
    toFormat['created'] = toFormat.created.toDate().toLocaleString();
    arrayText.push(toFormat);
  });
  return arrayText;
});

export const uploadPost = createAsyncThunk(
  'posts/uploadPost',
  async (payload: any) => {
    db.collection('posts').add({
      content: payload.text,
      created: firebase.firestore.Timestamp.now(),
      userName: payload.uploadUser,
      userPhoto: payload.uploadUserPhoto,
    });
  }
);

const initialState: any = {
  posts: [],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
  },
});

export default postsSlice.reducer;
