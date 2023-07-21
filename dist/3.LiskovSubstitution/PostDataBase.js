"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PostDataBase {
    add(post) {
        return "original post " + post;
    }
    addTagPost(post) {
        return "tag post " + post;
    }
    addMentionPost(post) {
        return "mention post " + post;
    }
}
exports.default = PostDataBase;
//# sourceMappingURL=PostDataBase.js.map