"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagPost = exports.MentionPost = exports.Post = void 0;
class Post {
    createPost(postDB, post) {
        return postDB.add(post);
    }
}
exports.Post = Post;
class TagPost extends Post {
    //* CORRECT
    //* Override method
    createPost(postDB, post) {
        return postDB.addTagPost(post);
    }
}
exports.TagPost = TagPost;
class MentionPost extends Post {
    //* CORRECT
    //* Override method
    createPost(postDB, post) {
        return postDB.addMentionPost(post);
    }
}
exports.MentionPost = MentionPost;
//# sourceMappingURL=Post.js.map