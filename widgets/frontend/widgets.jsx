import React from 'react'
import ReactDOM from 'react-dom'
import Clock from './clock'
import Tabs from './tabs'

document.addEventListener("DOMContentLoaded", ()=> {
    const clock = document.getElementById("clock")
    const tabs = document.getElementById("tabs")
    ReactDOM.render(<Clock/>, clock)
    ReactDOM.render(<Tabs />, tabs)

})