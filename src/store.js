import { configureStore } from "@reduxjs/toolkit";
import sectionsReducer from './features/sections/sectionsSlice';
import servicesReducer from './features/sections/servicesSlice';
import newspaperReducer from "./features/sections/newspaperSlice";
import formRuducer from './features/form/formSlice';

export const store = configureStore({
    reducer : {
        sections : sectionsReducer,
        services : servicesReducer,
        newspaper : newspaperReducer,
        form : formRuducer,
    }
})