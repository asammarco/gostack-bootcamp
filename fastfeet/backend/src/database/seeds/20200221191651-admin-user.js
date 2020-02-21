// Não executar essa seed
// O usuário admin é um "usuário padrão"
// Todo dado padrão deve ser criado via migrate e não seed
// O arquivo só foi adicionado para "cumprir o exercício proposto"

const bcrypt = require('bcryptjs');

module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Distribuidora FastFeet',
          email: 'admin@fastfeet.com',
          password_hash: bcrypt.hashSync('123456', 8),
          is_admin: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
