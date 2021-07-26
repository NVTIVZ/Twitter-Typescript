import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import db from '../firebase';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = db.collection('posts');
  const data = await response.get();
  let arrayText: any = [];
  data.docs.forEach((item) => {
    arrayText.push(item.data());
  });
  console.log(arrayText);
  return arrayText;
});

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
