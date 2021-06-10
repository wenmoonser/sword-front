/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import PresaleConfig from 'config/constants/presale'
import { PresaleState, Presale } from '../types'
import fetchTokensLeft from './fetchTokensLeft'
import { fetchUserPresaleAllowances, fetchUserTokensUnclaimed, fetchUserPresaleBalance } from './fetchUserPresale'

const initialState: PresaleState = { data: { ...PresaleConfig } }

export const PresaleSlice = createSlice({
  name: 'Referrals',
  initialState,
  reducers: {
    setTokensLeftData: (state, action) => {
      state.data = {
        ...state.data,
        tokensLeft: action.payload,
      }
    },
    setUserTokensUnclaimedData: (state, action) => {
      state.data = {
        ...state.data,
        tokensUnclaimed: action.payload,
      }
    },
    setUserPresaleAllowance: (state, action) => {
      state.data = {
        ...state.data,
        userAllowance: action.payload,
      }
    },
    setUserBusdBalance: (state, action) => {
      state.data = {
        ...state.data,
        busdBalance: action.payload,
      }
    },
    setUserCakeBalance: (state, action) => {
      state.data = {
        ...state.data,
        cakeBalance: action.payload,
      }
    },
  },
})

// Actions
export const { setTokensLeftData, setUserPresaleAllowance, setUserTokensUnclaimedData, setUserBusdBalance, setUserCakeBalance } = PresaleSlice.actions

// Thunks
export const fetchTokensLeftDataAsync = () => async (dispatch) => {
  const data = await fetchTokensLeft()

  dispatch(setTokensLeftData(data))
}

export const fetchUserPresaleAllowanceDataAsync = (account) => async (dispatch) => {
  const data = await fetchUserPresaleAllowances(account)

  dispatch(setUserPresaleAllowance(data))
}

export const fetchUserBalanceDataAsync = (account) => async (dispatch) => {
  const data = await fetchUserPresaleBalance(account)

  dispatch(setUserBusdBalance(data[0]))
  dispatch(setUserCakeBalance(data[1]))
}

export const fetchUserTokensUnclaimedDataAsync = (account) => async (dispatch) => {
  const data = await fetchUserTokensUnclaimed(account)

  dispatch(setUserTokensUnclaimedData(data))
}

export default PresaleSlice.reducer
