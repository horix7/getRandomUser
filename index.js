const app = new Vue({
  el: "#app",
  data() {
    return {
      picture:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--xGte5UMV--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/323816/b8987414-a7a9-4172-803c-ea6077748016.jpg",
      firstname: "paul",
      lastname: "horix",
      email: "email@emmial.com",
      gender: "male",
      disabled: false,
    };
  },
  methods: {
    async getRandomUser() {
      this.disabled = true;
      await fetch("https://randomuser.me/api/")
        .then((data) => data.json())
        .then((user) => {
          const userInfo = user.results[0];
          this.firstname = userInfo.name.title + userInfo.name.first;
          this.lastname = userInfo.name.last;
          this.email = userInfo.email;
          this.picture = userInfo.picture.large;
          this.gender = userInfo.gender;
          this.disabled = false;
        });
    },
  },
});
