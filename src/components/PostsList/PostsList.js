import Component from "../Component.js";
import Post from "../Post/Post.js";
import Button from "../Button/Button.js";

export default class PostsList extends Component {
  constructor(posts = [], className = "posts-list") {
    super(className);
    this.posts = posts;
    this.postsContainer = new Component("posts");
    this.buttonsContainer = new Component("buttons");
    this.sortSelect = new Component("select", "select");
    this.sortParams = [
      {
        property: "title",
        order: 1,
        isLength: false,
        optionName: "По названию",
      },
      {
        property: "views",
        order: 1,
        isLength: false,
        optionName: "По просмотрам",
      },
      {
        property: "userName",
        order: 1,
        isLength: false,
        optionName: "По пользователям",
      },
    ];
    this.render();
  }

  onDeletePost(handler) {
    this.deleteHandler = handler;
  }

  sortHandler(property, order = 1, isLength = false) {
    this.posts.sort((a, b) => {
      const item = isLength ? a[property].length : a[property];
      const nextItem = isLength ? b[property].length : b[property];
      return item > nextItem ? 1 * order : -1 * order;
    });
    this.renderPosts();
  }

  renderPosts() {
    this.postsContainer.$element.innerHTML = "";
    this.posts.forEach((post) => {
      const postComponent = new Post(post);
      this.postsContainer.$element.appendChild(postComponent.$element);
      postComponent.onDelete((id) => { this.deleteHandler(id); })
    });
  }

  render() {
    this.$element.append(this.sortSelect.$element);
    this.sortParams.forEach((p) => {
      this.sortSelect.$element.append(new Option(p.optionName, p.property, p.userName));
    });
    this.sortSelect.$element.addEventListener("change", (e) => {
      const param = this.sortParams.find(
        (p) => p.property === this.sortSelect.$element.value
      );
      this.sortHandler(param.property, param.order, param.isLength);
      console.log(param);
    });

    this.$element.appendChild(this.buttonsContainer.$element);
    this.$element.appendChild(this.postsContainer.$element);
    this.renderPosts();
  }
}
