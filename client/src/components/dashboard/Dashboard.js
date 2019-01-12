import React, { Component } from 'react'
import { getCurrentProfile } from "../../actions/profileAction";
import { connect } from "react-redux";



class Dashboard extends Component {

  render() {
    return (
      <div>
        <h1>登录成功后，可以看到本页面，在页面中会获取用户数据信息！</h1>
      </div>
    )
  }

  componentDidMount() {
    //调用action
    this.props.getCurrentProfile()

  }
}
export default connect(null, { getCurrentProfile })(Dashboard) 