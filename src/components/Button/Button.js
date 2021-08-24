import Component from "../Component.js";

export default class Button extends Component {
  constructor(onClick, title, className = "sort-button") {
    super(className, "button");
    this.$element.addEventListener("click", onClick);
    this.$element.textContent = title;
  }
}
