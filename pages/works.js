import React from 'react'
import { connect } from 'react-redux'

import Page from '../components/page'
import Hero from '../containers/works/hero'
import Worklist from '../containers/works/worklist'

import Footer from '../components/footer'

import FooterHome from '../containers/works/footer'
import styled from 'styled-components'
import { getWorks ,getWorksList, getWorkCategories} from '../actions/actions'

class Works extends React.Component {
  static async getInitialProps (props) {
    const { store, isServer } = props.ctx
    
    store.dispatch(getWorks())
    store.dispatch(getWorksList())
    store.dispatch(getWorkCategories())
    return { isServer }
  }
  constructor(props){
    super(props);
     
  }
  
  goToPage = (pageNumber) => {
    this.reactPageScroller.goToPage(pageNumber);
  }
  
  componentWillMount = () => {
    this.props.dispatch(getWorks());
    this.props.dispatch(getWorksList());
    this.props.dispatch(getWorkCategories());
  }
  

   
  render () {


    return (
      <Page title='Works Page'>
            <Hero />
            <Worklist/>
            <FooterHome/>
            <Footer/>
      </Page>    
    )
  }
}
const mapStateToProps = state => {
  return { works:state.works,workslist : state.workslist, workcategories : state.workcategories};
};
const mapDispatchToProps = dispatch => ({
  ...getWorks,getWorksList,getWorkCategories,
  dispatch                // ← Add this
})

export default connect(mapStateToProps,mapDispatchToProps)(Works)