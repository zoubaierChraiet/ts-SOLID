import Cart from "./1.SingleResponsibility/Cart";
import Item from "./1.SingleResponsibility/Item";
import { MentionPost, Post, TagPost } from "./3.LiskovSubstitution/Post";
import PostDataBase from "./3.LiskovSubstitution/PostDataBase";

// const myCart = new Cart();

// const item1 = new Item("code1", 3, 15);
// const item2 = new Item("code2", 6, 20);

const db: PostDataBase = new PostDataBase();

const postsList: string[] = [];

postsList.push("original post");
postsList.push("#tag post");
postsList.push("@mention post");

let postObj: Post;

for (let post of postsList) {
  if (post.startsWith("#")) {
    postObj = new TagPost();
  } else if (post.startsWith("@")) {
    postObj = new MentionPost();
  } else {
    postObj = new Post();
  }
  const res = postObj.createPost(db, post);
  console.log(res);
}
