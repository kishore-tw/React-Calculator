import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { Provider } from 'react-redux'
import store from './redux/store'

jest.mock("react-dom", () => ({ render: jest.fn() }))

test("renders with App and root div", () => {
  const root = document.createElement("div")
  root.id = "root"
  document.body.appendChild(root)

  require("./index.js")
  expect(ReactDOM.render).toHaveBeenCalledWith(<Provider store={store}>
    <App />
  </Provider>, root)
})