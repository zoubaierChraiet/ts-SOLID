import PostDataBase from "./PostDataBase";

class Post {
  public createPost(postDB: PostDataBase, post: string) {
    return postDB.add(post);
  }
}

class TagPost extends Post {
  //* CORRECT
  //* Override method
  public createPost(postDB: PostDataBase, post: string) {
    return postDB.addTagPost(post);
  }

  //! Bad behaviour
  //   public createTagPost(postDB: PostDataBase, post: string) {
  //     return postDB.addTagPost(post);
  //   }
}

class MentionPost extends Post {
  //* CORRECT
  //* Override method
  public createPost(postDB: PostDataBase, post: string) {
    return postDB.addMentionPost(post);
  }

  //! Bad behaviour
  //   public createMentionPost(postDB: PostDataBase, post: string) {
  //     return postDB.addMentionPost(post);
  //   }
}

export { Post, MentionPost, TagPost };
