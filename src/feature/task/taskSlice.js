import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: "1",
        title: "Task 1",
        description: "Task 1 description",
        completed: false
    },
    {
        id: "2",
        title: "Task 2",
        description: "Task 2 description",
        completed: false 
    }
]

export const taskSlice = createSlice({
   name: 'tasks',
   initialState: initialState,
   reducers: {
    addTask: (state, action) => {
        state.push(action.payload);
      },
    deleteTask: (state, action) => {
        const foundTask = state.find((task) => task.id === action.payload);
        if (foundTask) {
          state.splice(state.indexOf(foundTask), 1);
        }
      },  
   }
})

export const { addTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer
