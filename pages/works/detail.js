import React from 'react'
import { connect } from 'react-redux'

import Page from '../../components/page'

import Hero from '../../containers/workdetail/hero'
import Slider from '../../containers/workdetail/slider'
import Wireframe from '../../containers/workdetail/wireframe'
import Related from '../../containers/workdetail/worklist'

import Footer from '../../components/footer'
import FooterHome from '../../containers/home/footerhome'
import { getWorksListSingle,getWorksList } from '../../actions/actions' 


class Index extends React.Component {
  static async getInitialProps (props) {
    const { store, isServer } = props.ctx
    console.log('asdasd',props.ctx.query)
    
    let keyword = props.ctx.query.id;
    store.dispatch(getWorksListSingle(keyword))
    store.dispatch(getWorksList())

    return { isServer }
  }
  constructor(props){
    super(props);
     
  }
  componentDidMount = () => {
    console.log(window.location)
    const id = (new URLSearchParams(location.search)).get("id");
    this.props.dispatch(getWorksListSingle(id))
  }
  componentWillReceiveProps = () => {
    const id = (new URLSearchParams(location.search)).get("id");
    this.props.dispatch(getWorksListSingle(id))
  }
  render () {


    return (
      <Page title='Work - '>
       
        
            <Hero/>
            <Slider/>
            <Wireframe/>
            <Related/>
            <FooterHome/>
            <Footer/>
        
        
      </Page>    
    )
  }
}
const mapStateToProps = state => {
  return {  workslistsingle:state.workslistsingle,workslist : state.workslist};
};
const mapDispatchToProps = dispatch => ({
  ...getWorksListSingle,getWorksList,
  dispatch                // ← Add this
})

export default connect(mapStateToProps,mapDispatchToProps)(Index)
