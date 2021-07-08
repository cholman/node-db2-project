
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();

        tbl
            .string('model', 128)
            .notNullable()
            .index();
        tbl
            .string('make', 128)
            .notNullable();
        tbl
            .string('VIN', 128)
            .notNullable();
        tbl
            .integer('mileage', 128)
            .notNullable();
            
        tbl.string('trans', 128);
        tbl.string('status', 128);
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
  
};
