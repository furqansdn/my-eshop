import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Jonas',
    email: 'jonas@myshop.com',
    password: bcrypt.hashSync('password', 12),
    isAdmin: false,
  },
  {
    name: 'steven',
    email: 'steven@myshop.com',
    password: bcrypt.hashSync('password', 12),
    isAdmin: false,
  },
  {
    name: 'Admin',
    email: 'admin@myshop.com',
    password: bcrypt.hashSync('password', 12),
    isAdmin: true,
  },
];

export default users;
