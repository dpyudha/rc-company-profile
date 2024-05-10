import React from 'react'
import { connect } from 'react-redux'

import { loadData, tickClock,setCarousel,getHome, getHomeClient , getHomeSliders} from '../actions/actions' 
import Page from '../components/page'
import HomeHero from '../containers/home/homehero'
import HomeSlider from '../containers/home/homeslider'
import HomeTestimonial from '../containers/home/hometestimonial'
import Footer from '../components/footer'

import FooterHome from '../containers/home/footerhome'
import styled from 'styled-components'
import {SectionsContainer, Section } from 'react-fullpage';
import {
  BrowserView,
  MobileView,
  
} from "react-device-detect";

class Index extends React.Component {
  static async getInitialProps (props) {
    const { store, isServer } = props.ctx
    store.dispatch(getHome())


    store.dispatch(getHomeClient())

    return { isServer }
  }
  constructor(props){
    super(props);
    this.state = {
      "activeSection" : 0,
      "isScrolled" : true
    }
    this.handleMouseWheel = this.handleMouseWheel.bind(this);
    
  }
  
  goToPage = (pageNumber) => {
    this.reactPageScroller.goToPage(pageNumber);
  }
  
  componentDidUpdate = () => {
  }
  handleMouseWheel = event => {
    
    const e = window.event || event; 
    const delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
   
  }
  componentWillMount = () => {
    this.props.dispatch(getHome())
    this.props.dispatch(getHomeClient())
    this.props.dispatch(getHomeSliders())
  }
  componentDidMount = () => {
    window.addEventListener('mousewheel', this.handleMouseWheel, false);
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
      <Page title='Index Page'>
          
            
                <HomeHero title={typeof this.props.home[0] !== "undefined" ? this.props.home[0].home_hero_title : ""} desc={typeof this.props.home[0] !== "undefined" ?  this.props.home[0].home_hero_desc : ""}/>

                <HomeSlider
                  
                />
              
                <HomeTestimonial clients={this.props.homeclients} title={typeof this.props.home[0] !== "undefined" ?  this.props.home[0].Home_client_title : ""} desc={typeof this.props.home[0] !== "undefined" ?  this.props.home[0].Home_client_desc : ""} subtitle={typeof this.props.home[0] !== "undefined" ?  this.props.home[0].Home_client_subtitle : ""}/>
              
                <FooterHome 
                className="full"/>
              
                <Footer className="full"/>
              
            
           
      </Page>    
    )
  }
}
const mapStateToProps = state => {
  return { activeCarousel: state.activeCarousel ,home:state.home,homeclients:state.homeclients, homesliders: state.homesliders};
};
const mapDispatchToProps = dispatch => ({
  ...getHomeClient,getHome,getHomeSliders,
  dispatch                // ← Add this
})

export default connect(mapStateToProps,mapDispatchToProps)(Index)
