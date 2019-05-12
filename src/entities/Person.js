class Person {
   constructor ({ id, avatarUrl, name, about, createdAt, posts, comments }){
        this.firstName = name ? name.first : "";
        this.lastName = name ? name.last : "";
        this.photo = avatarUrl || 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg';
        this.description = about ? about.bio : "No bio";
        this.job = about ? about.job : "Unemployed";
        this.postTime = new Date(createdAt);
        this.id = id;
        this.posts = posts;
        this.comments = comments;
    }
}

export default Person;