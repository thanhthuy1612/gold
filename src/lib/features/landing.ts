import type { PayloadAction } from '@reduxjs/toolkit';

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { endpoints, axiosInstance } from 'src/lib/axios';

export interface MetalPrice {
  productType: string | null;
  productTypeName: string;
  priceIn: number;
  priceOut: number;
  lastUpdate: string;
  unitOfMeasure: string;
  description: string | null;
}

interface MetalResponse {
  prices: MetalPrice[];
  lastUpdate: string;
}

interface LandingState {
  gold: MetalPrice[];
  silver: MetalPrice[];
  goldLastUpdate: string | null;
  silverLastUpdate: string | null;
  loading: boolean;
  type?: 'gold' | 'silver';
}

const fetchGoldApi = async (): Promise<MetalResponse> => {
  const res = await axiosInstance.get(endpoints.landing.gold);
  return res.data.data;
};

const fetchSilverApi = async (): Promise<MetalResponse> => {
  const res = await axiosInstance.get(endpoints.landing.silver);
  return res.data.data;
};

export const fetchLandingGold = createAsyncThunk(
  'landing/fetchGold',
  async () => await fetchGoldApi()
);

export const fetchLandingSilver = createAsyncThunk(
  'landing/fetchSilver',
  async () => await fetchSilverApi()
);

export const fetchLandingMetals = createAsyncThunk('landing/fetchMetals', async () => {
  const [gold, silver] = await Promise.all([fetchGoldApi(), fetchSilverApi()]);

  return { gold, silver };
});

const initialState: LandingState = {
  gold: [],
  silver: [],
  goldLastUpdate: null,
  silverLastUpdate: null,
  loading: false,
};

const landingSlice = createSlice({
  name: 'landing',
  initialState,
  reducers: {
    updateType: (state, action: PayloadAction<'gold' | 'silver'>) => {
      state.type = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      /* ---------- FETCH BOTH ---------- */
      .addCase(fetchLandingMetals.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLandingMetals.fulfilled, (state, action) => {
        state.loading = false;

        state.gold = action.payload.gold.prices;
        state.goldLastUpdate = action.payload.gold.lastUpdate;

        state.silver = action.payload.silver.prices;
        state.silverLastUpdate = action.payload.silver.lastUpdate;
      })
      .addCase(fetchLandingMetals.rejected, (state) => {
        state.loading = false;
      })

      /* ---------- FETCH GOLD ---------- */
      .addCase(fetchLandingGold.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLandingGold.fulfilled, (state, action) => {
        state.loading = false;
        state.gold = action.payload.prices;
        state.goldLastUpdate = action.payload.lastUpdate;
      })

      /* ---------- FETCH SILVER ---------- */
      .addCase(fetchLandingSilver.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLandingSilver.fulfilled, (state, action) => {
        state.loading = false;
        state.silver = action.payload.prices;
        state.silverLastUpdate = action.payload.lastUpdate;
      });
  },
});

export default landingSlice.reducer;

export const { updateType } = landingSlice.actions;
