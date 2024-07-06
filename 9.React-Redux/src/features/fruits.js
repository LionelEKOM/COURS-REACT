import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [
        {
            name: "Mango",
            url: "/images/mango.jpg",
            price: 5,
            id: 123456,
        },
        {
            name: "Watermelon",
            url: "/images/watermelon.jpg",
            price: 10,
            id: 123457,
        }
    ]
}

const fruitSlice = createSlice({
    name: "fruit",
    initialState,
})
export default fruitSlice.reducer;