import { configureStore, createSlice } from '@reduxjs/toolkit'

let g_user_info = createSlice({
    name : 'g_user_info',
    initialState : {
        name : '',
        mail : '',
    },
    reducers : {
        set_name(state, a){
            state.name = a
        },
        set_mail(state, a){
            state.mail = a
        }
    }
  })

export default configureStore({
  reducer: {
    g_user_info : g_user_info.reducer,
   }
})

export let {set_name, set_mail} = g_user_info.actions;