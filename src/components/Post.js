import React from "react";
import PropTypes from "prop-types";

function Post(props) {
  const { author, title, permalink, thumbnail, url } = props.post;
  return (
    <div className="post_container">
      <small>Posted by {author}</small>
      <a href={url} target="_blank">
        <h2>{title}</h2>
      </a>
      {thumbnail !== "self" && thumbnail !== "default" ? (
        <img src={thumbnail} />
      ) : null}
      <a href={`http://www.reddit.com${permalink}`}>comments</a>
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired
};
export default Post;
