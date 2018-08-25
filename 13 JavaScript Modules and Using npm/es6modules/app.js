import User, { createURL, gravatar } from './src/user';

const Nan = new User('Nando Hidayat', 'mnandohidayat@gmail.com', 'nando.com');
const profile = createURL(Nan.name);
const image = gravatar(Nan.email);
console.log(profile);
console.log(image);
