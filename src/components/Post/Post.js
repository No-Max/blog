import Component from "../Component.js";
import "./post.css"

export default class Post extends Component {
    constructor(post) {
        super("post");
        this._post = post;
        this.render();
    }
    render() {
      this.$element.innerHTML = `<div class="horisontal">
        <div>
          <img src="img/${this._post.image}"/>
        </div>
        <div>
            <div class="horisontal">
            <div class="post-title">${this._post.title}</div>
            <div class="post-views"><span>Просмотров:</span> ${this._post.views}</div>
          </div>
          <div class="post-content">${this._post.body}</div>
          <div class="post-author"><span>Пользователь:</span> ${this._post.userName}</div>
        </div>
      </div>`;
    }
}
