const bcrypt = require('bcrypt');

const hashPassword = async (pw) => {
  const hash = await bcrypt.hash(pw, 12);
  console.log(hash);
};

const login = async (pw, hash) => {
  const result = await bcrypt.compare(pw, hash);
  if (result) {
    console.log('Logged in!');
  } else {
    console.log('Wrong password!');
  }
};  

// hashPassword('monkey');

login('monkey','$2b$12$bbdaxJ2pjRfA9oHYEwk0muC8D0VVwwCYP82Irlh5mw8B42w1ZBUCm');
