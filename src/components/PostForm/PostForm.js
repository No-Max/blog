import Component from "../Component.js";
import "./postform.css"

export default class extends Component {
  constructor(className) {
    super(className, "form");
    this.users = [];
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

  clearForm() {
    this.$element.title.value = '';
    this.$element.body.value = '';
    this.$element.userId.value = this.$element.userId.querySelector('option').value;
  }

  updateUserList() {
    this.$element.userId.innerHTML = '';
    this.users.forEach((user) => {
      this.$element.userId.innerHTML += `
        <option value="${user.id}">${user.name}</option>
      `
    });
    this.$element.submit.removeAttribute('disabled');
  }

  render() {
    this.$element.innerHTML = `
      <input type="text" name="title" class='title-list'/>
      <textarea name="body" cols='36' rows="10" class='text-description'></textarea>
      <select name="userId" class='name-list'>
      </select>
      <input class='send-button' type="submit" name="submit" disabled value="Отправить" />
    `;
  }
}
