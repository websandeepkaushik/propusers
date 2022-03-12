import { createSlice } from '@reduxjs/toolkit'

export const property = createSlice({
  name: 'property',
  initialState: {
    properties: null,
    filterProperties: null
  },
  reducers: {
    setProperties: (state, {payload}) => {
      state.properties = JSON.parse(JSON.stringify(payload));
      state.filterProperties = JSON.parse(JSON.stringify(payload));
    },
    sortProperties: (state, {payload}) => {
      const cl = JSON.parse(JSON.stringify(state.properties));
      let filterOpt = payload.filter;
      if(filterOpt) {
        filterOpt = filterOpt.split(" ")[0];
      }
      const filteredCl = cl.filter(p => (
        p.price >= payload.min &&
        p.price <= payload.max &&
        (
          payload.filter ? filterOpt == p.beds : true
        )
      ))
      if(payload.sortBy === 'recommended'){
        state.filterProperties = filteredCl;
      } else {
        state.filterProperties = filteredCl.sort(function(a, b) {
          var nameA = a[payload.sortBy]; // ignore upper and lowercase
          var nameB = b[payload.sortBy]; // ignore upper and lowercase
          if(state.sortBy && state.sortBy == payload) {
            if (nameA > nameB) return -1;
            if (nameA < nameB) return 1;
          } else {
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
          }
          // names must be equal
          return 0;
        });
      }
    },
  },
  extraReducers: {
    
  }
})

// Action creators are generated for each case reducer function
export const { setProperties, sortProperties } = property.actions

export default property.reducer