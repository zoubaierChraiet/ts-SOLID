"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Post_1 = require("./3.LiskovSubstitution/Post");
const PostDataBase_1 = __importDefault(require("./3.LiskovSubstitution/PostDataBase"));
// const myCart = new Cart();
// const item1 = new Item("code1", 3, 15);
// const item2 = new Item("code2", 6, 20);
const db = new PostDataBase_1.default();
const postsList = [];
postsList.push("original post");
postsList.push("#tag post");
postsList.push("@mention post");
let postObj;
for (let post of postsList) {
    if (post.startsWith("#")) {
        postObj = new Post_1.TagPost();
    }
    else if (post.startsWith("@")) {
        postObj = new Post_1.MentionPost();
    }
    else {
        postObj = new Post_1.Post();
    }
    const res = postObj.createPost(db, post);
    console.log(res);
}
//# sourceMappingURL=app.js.map