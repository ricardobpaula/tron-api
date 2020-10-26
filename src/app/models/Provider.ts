import {DataTypes, Model, Sequelize } from 'sequelize';
import database from '../../database';

class Provider extends Model {
  public id!: number;
  public name!: string;
  public cnpj!: string;
  public phone!: string;
  public email!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public static readonly TableName: string = 'Providers';

  public static prepareInit(){
    this.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        name: new DataTypes.STRING,
        cnpj: new DataTypes.STRING(14),
        phone: new DataTypes.STRING(11),
        email: new DataTypes.STRING
        },
        {
          sequelize: database.connection,
          freezeTableName: true,
          tableName: this.TableName,
        }
    );
  }
}

export default Provider;