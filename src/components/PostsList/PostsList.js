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
        let postsTitles = Array.from(document.querySelectorAll('.post-title'))
        let titles = postsTitles.map((post) => post.innerText).sort().reverse()
        for (let title of titles){
            for (let postTitle of postsTitles){
                if (postTitle.innerText === title)
                document.querySelector('.buttons').after(postTitle.parentNode.parentNode)
            }
        }
    }

    handlerSortByViews(){
        let postsViews = Array.from(document.querySelectorAll('.post-views'))
        let views = postsViews.map((post)=>post.innerText).sort((a , b) => a - b)
        for (let view of views){
            for (let postView of postsViews){
                if (postView.innerText === view)
                document.querySelector('.buttons').after(postView.parentNode.parentNode)
            }
        }

    }

    render() {
        const $buttonTitleElement = new Button(this.handlerSortByTitle, "По названию").$element;
        const $buttonViewsElement = new Button(this.handlerSortByViews, "По просмотрам", 'view-button').$element;
        this.$element.innerHTML = '<div class = "buttons"></div>'

        this.$element.querySelector('.buttons').appendChild($buttonTitleElement);
        this.$element.querySelector('.buttons').appendChild($buttonViewsElement);

        this.posts.forEach((post) => {
            this.$element.appendChild(
                new Post(post).$element
            );
        });
    }
}