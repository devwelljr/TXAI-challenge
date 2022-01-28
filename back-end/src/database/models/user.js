module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "User",
    {
      user: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      tableName: "users",
      timestamps: false,
      underscored: true,
    }
  );

  return user;
};
