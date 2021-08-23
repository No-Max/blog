export default class Component {
    constructor(className, type = "div") {
        this.className = className;
        this.$element = document.createElement(type);
        this.$element.classList.add(className);

    }
}