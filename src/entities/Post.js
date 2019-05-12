class Post {
    
    constructor({id, userId, type, videoUrl = "", imageUrl = "", text = "", comments, user = ""}) {
        this.id = id;
        this.userId = userId;
        this.type = type;
        this.content = videoUrl || imageUrl || text;
        this.comments = comments;
        this.avatarUrl = user.avatarUrl || 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg';
    }
}

export default Post;