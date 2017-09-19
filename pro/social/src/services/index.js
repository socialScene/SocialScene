const social = require('./social/social.service.js');
const users = require('./users/users.service.js');
const user=require('./users/users.service.js');
const profile = require('./profile/profile.service.js');
const posts = require('./posts/posts.service.js');


module.exports = function () {
  const app = this; 
  app.configure(social);
  app.configure(users);
  app.configure(posts);
  app.configure(user);
  app.configure(profile);
 
};
