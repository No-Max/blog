import Component from "../Component.js";

export default class extends Component {
  constructor(className) {
    super(className, "form");
    this.render();
  }

  onSubmit(handler) {
    this.$element.onsubmit = (e) => {
      e.preventDefault();
      handler({
        title: this.$element.title.value,
        body: this.$element.body.value,
        userId: Number(this.$element.userId.value),
      });
    };
  }

  render() {
    this.$element.innerHTML = `
      <input type="text" name="title" />
      <textarea name="body" rows="10"></textarea>
      <select name="userId">
        <option value="1">Sam</option>
      </select>
      <input type="submit" value="Отправить" />
    `;
  }
}
