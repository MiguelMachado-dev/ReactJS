import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

const PostHeader = props => (
  <div className="headerPost">
    <img src={props.avatar} alt="avatar" />
    <div className="userInfo">
      <strong>{props.name}</strong>
      <span>{props.time}</span>
    </div>
  </div>
);

PostHeader.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
};

export default PostHeader;
