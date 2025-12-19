import type { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';

export interface IUserRedux {
  searchText: string;
}
const initialState: IUserRedux = {
  searchText: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateSearchTextUser: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
    resetStateUser: () => initialState,
  },
});

export default userSlice.reducer;

export const { resetStateUser, updateSearchTextUser } = userSlice.actions;
