import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ResponseCategories } from '../../API/types'
import { Draft } from 'immer'
import { RootState } from '../store'
import { HYDRATE } from 'next-redux-wrapper'

export interface CategoriesState {
  data: ResponseCategories
}

const initialState: CategoriesState = {
  data: {
    categories: [{ id: 0, name: '', subCategories: [{ id: 0, name: '' }] }],
  },
}

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategoriesData: (
      state: Draft<CategoriesState>,
      action: PayloadAction<ResponseCategories>,
    ) => {
      state.data = action.payload
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      state.data = action.payload.categories.data
    },
  },
})

export const { setCategoriesData } = categoriesSlice.actions

export const selectCategoriesData = (state: RootState) => state.categories.data

export const categoriesReducer = categoriesSlice.reducer
