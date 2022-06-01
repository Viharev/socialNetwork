import "./posts.module.css";

const p = {
  post: "posts_post__mHDto",
  wrapPost: "posts_wrapPost__6UpjQ",
  posts: "posts_posts__wVymS",
  avatar: "posts_avatar__brWtx",
  likePost: "posts_likePost__HPtO7",
  like: "posts_like__ztpDd",
  disLike: "posts_disLike__148CC",
  summ: "posts_summ__cODGw",
  likes: "posts_likes__DOAh+",
  disLikes: "posts_disLikes__i+cwA",
  quantityLikesDis: "posts_quantityLikesDis__-Fk4O",
};

const Post = (props) => {
  return (
    <div className={p.post}>
      <div className={p.wrapPost}>
        <div className={p.avatar}>
          <img
            src="https://ya-mechtayu.ru/uploads/posts/2019-04/thumbs/1555537655_24d04af4-74c5-482a-a711-d9678d8b7381.jpeg"
            alt="avatar"
          />
        </div>
        <div className={p.posts}>{props.message}</div>
      </div>
      <div className={p.quantityLikesDis}>
        <div className={p.summ}>
          <div className={p.likes}>{props.like}</div>
          <div className={p.disLikes}>{props.dis}</div>
        </div>
        <div className={p.likePost}>
          <button className={p.like}>like</button>
          <button className={p.disLike}>disLike</button>
        </div>
      </div>
    </div>
  );
};

export default Post;
