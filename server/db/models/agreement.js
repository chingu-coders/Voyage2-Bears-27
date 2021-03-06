'use strict';
module.exports = (sequelize, DataTypes) => {
  var Agreement = sequelize.define('Agreement', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },

    idea_id: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'ideas',
        key: 'id',
      },
      allowNull: false,
    },

    agreement: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    version: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: false,
    },
  }, {
      underscored: true,
      classMethods: {
        associate: function (models) {
          // associations can be defined here
          Agreement.belongsTo(models.Profile);
          Agreement.belongsTo(models.Idea);
        }
      }
    });
  return Agreement;
};
