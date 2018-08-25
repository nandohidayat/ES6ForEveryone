import { uniq } from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';
import { apiKey as key, url, sayHi, old, dog } from './src/config';
import User, { createURL, gravatar } from './src/user';

const Nan = User('Nando', 'mnandohidayat@gmail.com', 'nando.com');
console.log(Nan);