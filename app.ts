import Cart from "./1.SingleResponsibility/Cart";
import Item from "./1.SingleResponsibility/Item";
import { MentionPost, Post, TagPost } from "./3.LiskovSubstitution/Post";
import PostDataBase from "./3.LiskovSubstitution/PostDataBase";
import Gmail from "./5.DependecyInversion/Gmail";
import Hotmail from "./5.DependecyInversion/Hotmail";
import Notification from "./5.DependecyInversion/Notification";

{
  ("SRP");
}
// const myCart = new Cart();
// const item1 = new Item("code1", 3, 15);
// const item2 = new Item("code2", 6, 20);

{
  ("LSP");
}
// const db: PostDataBase = new PostDataBase();
// const postsList: string[] = [];
// postsList.push("original post");
// postsList.push("#tag post");
// postsList.push("@mention post");
// let postObj: Post;
// for (let post of postsList) {
//   if (post.startsWith("#")) {
//     postObj = new TagPost();
//   } else if (post.startsWith("@")) {
//     postObj = new MentionPost();
//   } else {
//     postObj = new Post();
//   }
//   const res = postObj.createPost(db, post);
//   console.log(res);
// }

{
  ("DIP");
}

//! BAD DESIGN
// const notif: Notification = new Notification();
// notif.sendGmail();
// notif.sendHotmail();

//* CONSRUCTOR INJECTION
const notif: Notification = new Notification(new Gmail());
const notif2: Notification = new Notification(new Hotmail());
notif.sendMessage();
notif2.sendMessage();

//* Method injection
// const notif3: Notification = new Notification();
// notif3.sendMessageMethod(new Gmail())

//* Property injection
// const notif4: Notification = new Notification();
// notif4.mailType = new Gmail();
// notif4.sendMessage();
