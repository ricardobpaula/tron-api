module.exports = {
    host: process.env.TYPEORM_HOST,
    type: 'mysql',
    port: Number(process.env.TYPEORM_PORT),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    synchronize: process.env.TYPEORM_SYNCHRONIZE == 'true',
    logging: process.env.TYPEORM_LOGGING  == 'true',
    // entities: ['src/models/**/*.ts'],
    // migrations: ['src/database/migrations/**/*.ts'],
    entities: [process.env.TYPEORM_ENTITIES],
    migrations: [process.env.TYPEORM_MIGRATIONS],
    cli: {
        entitiesDir: 'src/models/',
        migrationsDir: 'src/database/migrations/',
    }
};