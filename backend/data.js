import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Vimal Kumar',
      email: 'nairvimalkumar@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
      isSeller: true,
    },
  ],
  products: [
  ],
};
export default data;
