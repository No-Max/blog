import Component from "../Component.js";
import "./post.css"

export default class Post extends Component {
    constructor(post) {
        super("post");
        this._post = post;
        this.render();
    }

    onDelete(handler) {
      this.$element.querySelector('.delete-button').addEventListener('click', () => {
        if (window.confirm('Точно удалить?')) {
          handler(this._post.id);
        }
      });
    }
    
    render() {
      this.$element.innerHTML = `<div class="horisontal">
        ${ this._post.image ? `
          <div>
            <img src="img/${this._post.image}"/>
          </div>
        ` : '' }
        <div>
            <div class="horisontal">
            <div class="post-title">${this._post.title} <button class="delete-button">🗑️</button></div>
            <div class="post-views"><span>Просмотров:</span> ${this._post.views}</div>
          </div>
          <div class="post-content">${this._post.body}</div>
          <div class="post-author"><span>Пользователь:</span> ${this._post.userName}</div>
        </div>
      </div>`;
    }
}
