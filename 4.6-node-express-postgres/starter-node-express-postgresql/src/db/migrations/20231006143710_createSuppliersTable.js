/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  // when we run the migration, what change do we want to have happen?
  // in this case, we want to create a suppliers table

  // return knex... something with the name of the table we create... columns
  return knex.schema.createTable('suppliers', table => {
    table.increments('supplier_id').primary();
    table.string("supplier_name");
    table.string("supplier_address_line_1");
    table.string("supplier_address_line_2");
    table.string("supplier_city");
    table.string("supplier_state");
    table.string("supplier_zip");
    table.string("supplier_phone");
    table.string("supplier_email");
    table.text("supplier_notes");
    table.string("supplier_type_of_goods");

    table.timestamps(true, true);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  // how do we undo what the up function did?
  // in this case, we want to drop the suppliers table
  return knex.schema.dropTable('suppliers');
};
