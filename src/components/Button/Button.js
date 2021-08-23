import Component from "../Component.js";
import Post from "../Post/Post.js";
import "./button.css"

export default class Button extends Component {
    constructor(onClick, title, className = "sort-button") {
        super(className, "button");
        this.$element.addEventListener("click", onClick);
        this.$element.textContent = title
    }




}