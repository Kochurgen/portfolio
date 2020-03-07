import { combineReducers } from 'redux'
import sideBar from "./sideBar"
import Navigation from "./navigation"

export default combineReducers({
    Navigation,
    sideBar
})