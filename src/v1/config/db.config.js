const AllDb = [
    {
        HOST: "postgres",
        USER: "root",
        PASSWORD: "root",
        DB: "gudang",
        PORT: 5432,
        dialect: "postgres",
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000,
        },
    }
];
  
module.exports = (dbSelect) => {
    return AllDb[dbSelect];
}