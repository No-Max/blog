import "./style.css";
import axios from "axios";
import config from "./config/config.js";
import PostsList from "./components/PostsList/PostsList.js";

const app = document.querySelector('#app')

axios.get(config.server + "posts").then((response) => {
    app.appendChild(new PostsList(response.data).$element);



    // response.data.forEach((post) => {
    //     app.appendChild(
    //         new Post(post).$element
    //     );
    // });
});