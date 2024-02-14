import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlice";
import productReducer from "./productSlice";
import searchReducer from "./searchSlice";
import userSlice from "./user-slice";

const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer,
    search: searchReducer,
    users: userSlice,
  },
});

export default store;
