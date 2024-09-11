import * as reduxjsToolkit from "@reduxjs/toolkit";

export const routeBlockSlice = reduxjsToolkit.createSlice({
  name: 'routeBlock',
  initialState: {
    routeBlock: false,
  },
  reducers: {
    setRouteBlock(state, action) {
      state.routeBlock = action.payload
    },
  },
})
routeBlockSlice.selectors = {routeBlock: state => state.routeBlock}
