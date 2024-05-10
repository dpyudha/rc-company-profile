import React from 'react'
import { connect } from 'react-redux'
import Page from '../components/page'
import Hero from '../containers/whatwedo/hero'
import Whatwedo from '../containers/whatwedo/whatwedo'
import Process from '../containers/whatwedo/process'
import Contact from '../containers/whatwedo/contact'

import FooterHome from '../containers/home/footerhome'

import Footer from '../components/footer'
import { getWwd, getWwdProcess } from '../actions/actions'

class WhatWeDo extends React.Component {
  static async getInitialProps (props) {
    const { store, isServer } = props.ctx
    store.dispatch(getWwd())


    store.dispatch(getWwdProcess())

  }

  constructor(props){
    super(props);
    this.state = {
      "activeSection" : 0,
      "isScrolled" : true
    }
    this.handleMouseWheel = this.handleMouseWheel.bind(this);
    
  }

  handleMouseWheel = event => {
    
    const e = window.event || event; 
    const delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
   
  }

  render () {
    var that = this;
    var anchorArr = ['1', '2', '3',"4","5"];
    let options = {
      sectionClassName:     'section',
      anchors:              (!this.state.isScrolled ? (this.props.activeCarousel === 2 ? anchorArr : ["1"] ) : anchorArr),
      scrollBar:            false,
      navigation:           false,
      verticalAlign:        true,
      delay:                1000,
      arrowNavigation:      false,
      scrollCallback:function(e){
        if(e.activeSection === 1){
          that.setState({"isScrolled":false})
        }else{
          that.setState({"isScrolled":true})
        }
      }
    };
    return (
      <Page title='What We Do '>
        <Hero/>
        <Whatwedo/>
        <Process/>
        <Contact/>
        <FooterHome/>
        <Footer/>
      </Page>
    )
  }
}

const mapStateToProps = state => {
  return { wwd:state.wwd, wwdprocess: state.wwdprocess};
};
const mapDispatchToProps = dispatch => ({
  ...getWwd,...getWwdProcess,
  dispatch                // ← Add this
})

export default connect(mapStateToProps,mapDispatchToProps)(WhatWeDo)