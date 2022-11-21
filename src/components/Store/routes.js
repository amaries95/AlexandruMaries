import { createSlice } from "@reduxjs/toolkit";

const routesSlice = createSlice({
    name: "routes",
    initialState: {
        baseUrl: "https://alexandrumariesapi.azurewebsites.net",
        getVisibleReferences: "/Reference/visible",
        getAllReferences: "/Reference/all",
        addNewReference: "/Reference/add",
        updateReferenceVisibility: "/Reference/update",
        deleteReference: "/Reference/delete",
        userLogin: "/User/login",
        inrementViews: "/Views/increment",
        getViews: "/Views/all"
    }
});

export default routesSlice.reducer;