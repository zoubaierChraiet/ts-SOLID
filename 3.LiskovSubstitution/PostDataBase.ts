class PostDataBase {
  add(post: string) {
    return "original post " + post;
  }

  addTagPost(post: string) {
    return "tag post " + post;
  }

  addMentionPost(post: string) {
    return "mention post " + post;
  }
}

export default PostDataBase;
