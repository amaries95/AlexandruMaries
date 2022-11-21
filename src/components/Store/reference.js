import {createSlice} from "@reduxjs/toolkit";

const initialReferencesState = {referenceList: []};

const referenceSlice = createSlice({
    name: "reference",
    initialState: initialReferencesState,
    reducers: {
        saveReferences(state, actions){
            state.referenceList = actions.payload;
        }
    }
});

export default referenceSlice.reducer;
export const referenceActions = referenceSlice.actions;