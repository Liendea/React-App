import "./Component3.css";
import Post from "./Post";

export default function Component3() {
  return (
    <article className="component3">
      <h3>News</h3>
      <div class="post-container">
        <Post />
        <Post />
        <Post />
      </div>
      <div className="bottom-fade"></div>
    </article>
  );
}
