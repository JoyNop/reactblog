import React, { Component } from 'react'
import { getCurrentProfile } from "../../actions/profileAction";
import { connect } from "react-redux";
import { PROFILE_LOADING } from '../../actions/types';
import { PropTypes } from "prop-types";


class Dashboard extends Component {

  render() {
    const { user } = this.props.auth
    const { profile, loading } = this.props.profile
    let dashboardContent
    //判断profile是否为空或者loading是否为真
    if (profile === null || loading) {
      dashboardContent=<h4>加载动画！</h4>
    } else {
      dashboardContent=<h1>hello world</h1>
    }
    return (
      <div className='dahsboard'>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">Dashboard</h1>
            {dashboardContent}
            </div>
          </div></div>
      </div>
    )
  }
  componentDidMount() {
    //调用action
    this.props.getCurrentProfile()

  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  profile:state.profile
})



export default connect(mapStateToProps, { getCurrentProfile })(Dashboard) 