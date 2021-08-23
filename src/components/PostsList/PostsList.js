import Component from "../Component.js";
import Post from "../Post/Post.js";
import Button from "../Button/Button.js"

export default class PostsList extends Component {
  constructor(posts = [], className = "posts-list") {
    super(className);
    this.posts = posts;
    this.postsContainer = new Component('posts')
    this.buttonsContainer = new Component('buttons')
    this.sortSelect = new Component('select', 'select')
    this.sortParams = [
      {property: 'title', order: 1, isLength: false, optionName: 'По названию'}, 
      {property: 'views', order: 1, isLength: false, optionName: 'По просмотрам'}
    ]
    this.render();
  }

  sortHandler(property, order = 1, isLength = false){
    this.posts.sort((a, b) => {
      const item = isLength ? a[property].length: a[property]
      const nextItem = isLength ? b[property].length: b[property]
      return item > nextItem ? 1*order : -1*order
    })
    this.renderPosts()
  }

  renderPosts() {
    this.postsContainer.$element.innerHTML = ''
    this.posts.forEach((post) => {
      this.postsContainer.$element.appendChild(
        new Post(post).$element
      );
    });
  }

  render() {
    this.$element.append(this.sortSelect.$element)
    // {property: 'title', order: 0, isLength: false, optionName: 'По названию'}
    this.sortParams.forEach((p) => {
      this.sortSelect.$element.append(new Option(p.optionName, p.property))
    })
    this.sortSelect.$element.addEventListener('change', (e) => {
      // console.log(this.sortSelect.$element.value)
      const param = this.sortParams.find(p => p.property === this.sortSelect.$element.value)
      this.sortHandler(param.property, param.order, param.isLength)
      console.log(param)
    })

    // const buttonTitle = new Button(()=>this.sortHandler('title'), "По названию");
    // const buttonLenght = new Button(()=>this.sortHandler('body', -1, true), "Длинные посты");
    // const buttonViews = new Button(()=>this.sortHandler('views', -1), "С наибольшими просмотрами");
    // const buttonViewsRevers = new Button(()=>this.sortHandler('views', 1), "С наименьшими просмотрами");
    // const buttonLenghtRevers = new Button(()=>this.sortHandler('body', 1, true), "Короткие посты");
    // const buttonDefault = new Button(()=>this.sortHandler('id'), "Актуальные");

    // this.buttonsContainer.$element.appendChild(buttonTitle.$element);
    // this.buttonsContainer.$element.appendChild(buttonLenght.$element);
    // this.buttonsContainer.$element.appendChild(buttonLenghtRevers.$element);
    // this.buttonsContainer.$element.appendChild(buttonViews.$element);
    // this.buttonsContainer.$element.appendChild(buttonViewsRevers.$element);    
    // this.buttonsContainer.$element.appendChild(buttonDefault.$element);    

    this.$element.appendChild(this.buttonsContainer.$element)
    this.$element.appendChild(this.postsContainer.$element)
    this.renderPosts()
  }
}