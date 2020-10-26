import  { Sequelize }  from 'sequelize';
import  { dbConfig }   from '../config/database';

import Provider from '../app/models/Provider';

const models:any[] = [Provider];

class Database {
    public connection!: Sequelize;

    constructor() {
        
        this.init();
    }

    init(): void{
        this.connection = new Sequelize(dbConfig);
        models
        .map(model => model.init(this.connection))
        .map(model => model.associate && model.associate(this.connection.models));
    }
}

export default new Database();