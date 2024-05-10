import App from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'

import createStore from '../store'

import { ThemeProvider} from 'styled-components';

const theme = {
  colors : {
    primaryInvert : '#e4e4fd',
    primary : '#4544e6',
    dark : '#2b304d',
    secondary : '#7d819d'
  },
  font : {
    title : 'Abril Fatface',
    text : 'Airbnb Cereal App'
  },
  breakpoints : {
    lg : '1199.98px',
    md : '991.98px',
    sm : '765.98px',
    xs : '575.98px'
  }
}
class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx })
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps, store } = this.props
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
        
      </Provider>
    )
  }
}

export default withRedux(createStore)(withReduxSaga(MyApp))
