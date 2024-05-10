import React from 'react'
import { connect } from 'react-redux'

import Page from '../components/page'
import HomeStudio from '../containers/studio/homestudio'
import StudioContent from '../containers/studio/studiocontent'
import Agent from '../containers/studio/agent'
import Client from '../containers/studio/client'

import Footer from '../components/footer'

import FooterHome from '../containers/home/footerhome'
import styled from 'styled-components'
import Omnifesto from '../containers/studio/omnifesto'
import { getStudio } from '../actions/actions'

class Studio extends React.Component {
  static async getInitialProps (props) {
    const { store, isServer } = props.ctx
    

    return { isServer }
  }
  constructor(props){
    super(props);
     
  }
  
  goToPage = (pageNumber) => {
    this.reactPageScroller.goToPage(pageNumber);
  }
  
  componentDidUpdate = () => {
  }
  componentWillMount = () => {
    this.props.dispatch(getStudio());
  }

   
  render () {


    return (
      <Page title='Studio Page'>
       
        
            <HomeStudio />
            <StudioContent/>
            <Omnifesto/>
            <Client/>
            <FooterHome/>
            <Footer/>
          
        
        
      </Page>    
    )
  }
}
const mapStateToProps = state => {
  return { studio:state.studio};
};
const mapDispatchToProps = dispatch => ({
  ...getStudio,
  dispatch                // ← Add this
})

export default connect(mapStateToProps,mapDispatchToProps)(Studio)
