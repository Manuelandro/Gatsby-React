/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from "react"
import { Router } from "react-router-dom"
import { Provider } from "react-redux"

import configureStore from "./src/redux/configureStore"

exports.replaceRouterComponent = ({ history }) => {
    const store = configureStore()

    const ConnectedRouterWrapper = ({ children }) => (
        <Provider store={store}>
            <Router history={history}>{children}</Router>
        </Provider>
    )

    return ConnectedRouterWrapper
}
