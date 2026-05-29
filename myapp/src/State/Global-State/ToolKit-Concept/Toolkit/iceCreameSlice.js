import { createSlice } from "@reduxjs/toolkit";




let iceCreameSlice = createSlice({
  name: 'IceCreame',
  initialState: { noOfIceCreams: 500 },
  reducers: {
    buyIceCreame: (state) => {
      state.noOfIceCreams -= 1
    }
  }
})


export default iceCreameSlice.reducer

export let {buyIceCreame} = iceCreameSlice.actions