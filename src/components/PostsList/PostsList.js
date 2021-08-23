import Component from "../Component.js";
import Post from "../Post/Post.js";
import Button from "../Button/Button.js"

export default class PostsList extends Component {
    constructor(posts = [], className = "posts-list") {
        super(className);
        this.posts = posts;
        this.render();
    }

    handlerSortByTitle() {
        this.posts.sort((a, b) => a.title.localeCompare(b.title));
        this.render();
    }

    handlerSortByViews() {
        this.posts.sort((a, b) => a.views > b.views ? -1 : a.views === b.views ? 0 : 1);
        this.render();
    }

    render() {
        this.$element.innerHTML = '';
        const $buttonTitleElement = new Button(() => { this.handlerSortByTitle() }, "По названию").$element;
        const $buttonViewsElement = new Button(() => { this.handlerSortByViews() }, "По просмотрам").$element;

        this.$element.appendChild($buttonTitleElement);
        this.$element.appendChild($buttonViewsElement);

        this.posts.forEach((post) => {
            this.$element.appendChild(
                new Post(post).$element
            );
        });
    }
}