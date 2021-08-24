// импорты
import PostsList from "./components/PostsList/PostsList.js";
import PostForm from "./components/PostForm/PostForm.js";
import { getPosts, createPost } from "./services/posts.js";
import "./style.css";

// корневой элеммент приложения
const app = document.querySelector("#app");

// создаем компоненты
const postList = new PostsList([]);
const postForm = new PostForm("post-form");

// добавляем компоненты на страницу
app.appendChild(postForm.$element);
app.appendChild(postList.$element);

// получаем данные для постов при загрузке скрипта
getPosts().then((response) => {
  postList.posts = response.data;
  postList.renderPosts();
});

// обработчик для создания нового поста
postForm.onSubmit((post) => {
  createPost(post);
});
