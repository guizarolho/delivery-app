module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define('Sales', {
    id: {
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
      field: 'user_id',
    },
    sellerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
      field: 'seller_id',
    },
    totalPrice: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      field: 'total_price',
    },
    deliveryAddress: {
      type: DataTypes.STRING({ length: 100 }),
      allowNull: false,
      field: 'delivery_address',
    },
    deliveryNumber: {
      type: DataTypes.STRING({ length: 50 }),
      allowNull: false,
      field: 'delivery_number',
    },
    saleDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'sale_date',
    },
    status: {
      defaultValue: 'pendente',
      type: DataTypes.STRING({ length: 50 }),
    }
  },
  {
    tableName: 'sales',
    timestamps: false,
  });

  Sales.associate = (models) => {
    Sales.hasMany(models.SalesProducts, {foreignKey: 'sale_id', as: 'slProducts'});
    Sales.belongsTo(models.Users, {foreignKey: 'user_id', as: 'user_sales'});
    Sales.belongsTo(models.Users, {foreignKey: 'seller_id', as: 'user_seller'});
  };

  return Sales;
};