import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

function Post(props) {
  console.log(props);
  const {
    author,
    title,
    permalink,
    thumbnail,
    url,
    num_comments,
    created_utc
  } = props.post;

  return (
    <div className="post_container">
      <small>
        Posted by {author} {getTimeString(created_utc)}
      </small>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <h2>{title}</h2>
      </a>
      {thumbnail !== "self" && thumbnail !== "default" ? (
        <img src={thumbnail} alt="" />
      ) : null}
      <a
        href={`http://www.reddit.com${permalink}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {num_comments} comments
      </a>
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired
};
export default Post;

export function getTimeString(time) {
  return moment.unix(time).fromNow();
}
