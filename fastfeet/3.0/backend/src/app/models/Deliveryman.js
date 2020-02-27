import Sequelize, { Model } from 'sequelize';

class Deliveryman extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
      },
      { sequelize }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, {
      foreignKey: 'avatarId',
    });
    this.belongsTo(models.User, {
      foreignKey: 'createdByUserId',
    });
    this.belongsTo(models.User, {
      foreignKey: 'updatedByUserId',
    });
  }
}

export default Deliveryman;
