import React from 'react'
import { connect } from 'react-redux'

import Page from '../components/page'

import ContactPage from '../containers/contact'

import styled from 'styled-components'

class Contact extends React.Component {
  static async getInitialProps (props) {
    const { store, isServer } = props.ctx
    

    return { isServer }
  }
  constructor(props){
    super(props);
     
  }
  
  render () {


    return (
      <Page title='Contact Page'>
       
        
            <ContactPage/>
          
        
      </Page>    
    )
  }
}
const mapStateToProps = state => {
  return {  };
};
export default connect(mapStateToProps)(Contact)
