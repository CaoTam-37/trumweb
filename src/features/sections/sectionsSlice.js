import { createSlice } from "@reduxjs/toolkit";
import sectionsData from '../../Data'

const initialState = {
    data : sectionsData
}
const sectionsSlice = createSlice({
    name : 'sections',
    initialState,
    reducers : {
        addAni : (state)=>{
           state.data.section1.box1Ani = true
        },
        addAni1 : (state)=>{
            state.data.section1.box2Ani = true
        },
        addAni2 : (state)=>{
            state.data.section2.mContai2Ani = true
        },
        addAni3 : (state) =>{
            state.data.section3.mContai3Ani = true
        },
        addAni4 : (state)=>{
            state.data.section4.mContai4Ani = true
        }
    }
})

export const { addAni, addAni1, addAni2, addAni3, addAni4} = sectionsSlice.actions
export default sectionsSlice.reducer