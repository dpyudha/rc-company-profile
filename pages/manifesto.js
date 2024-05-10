import React from 'react'
import { connect } from 'react-redux'

import Page from '../components/page'
import Hero from '../containers/manifesto/hero'
import Footer from '../containers/manifesto/footer'
import { getManifesto } from '../actions/actions'


class Manifesto extends React.Component {
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
  
  componentWillMount = () => {
    this.props.dispatch(getManifesto())
  }

  
  render () {


    return (
      <Page title='Studio Page'>
            <Hero content={ this.props.manifesto.length >0 ? this.props.manifesto[0] : []}/>
            <Footer content={this.props.manifesto.length >0 ? this.props.manifesto[0] : []}/>
      </Page>    
    )
  }
}
const mapStateToProps = state => {
  return { manifesto:state.manifesto};
};
const mapDispatchToProps = dispatch => ({
  ...getManifesto,
  dispatch                // ← Add this
})

export default connect(mapStateToProps,mapDispatchToProps)(Manifesto)
