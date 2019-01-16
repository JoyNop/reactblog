import React, { Component } from 'react'
import { getCurrentProfile } from "../../actions/profileAction";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import Spinner from "../../common/Spinner";
import { Link } from "react-router-dom";

class Dashboard extends Component {

  render() {
    const { user } = this.props.auth
    const { profile, loading } = this.props.profile
    let dashboardContent
    //判断profile是否为空或者loading是否为真
    if (profile === null || loading) {
      dashboardContent = <Spinner />
    } else {
      //检查对象中是否有数据
      if (Object.keys(profile).length > 0) {
        dashboardContent = <h1>TODO:hello world</h1>
      } else {
        //用户已经登录，但是没有任何数据
        dashboardContent = (
          <div>
            <p className='lead text-muted'>欢迎{user.name}!</p>
            <p>您目前没有任何相关信息，请添加个人信息！</p>

            <Link to='creat-profile' className='btn btn-lg btn-info'>请添加您的个人信息</Link>
          </div>
        )
      }
    }
    return (
      <div className='dahsboard'>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">Dashboard</h1>
              {dashboardContent}
            </div>
          </div>
        </div>
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
  profile: state.profile
})



export default connect(mapStateToProps, { getCurrentProfile })(Dashboard) 