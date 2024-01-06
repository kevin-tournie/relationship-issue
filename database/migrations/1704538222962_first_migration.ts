import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected categories = "categories";
  protected products = "products";

  public async up() {
    this.schema.createTable(this.categories, (table) => {
      table.increments("id").primary();
      table.string("name");
      table.integer("state");
    });

    this.schema.createTable(this.products, (table) => {
      table.increments("id").primary();
      table.string("name");
      table.integer("state");
      table.integer("category_id").unsigned().references("categories.id");
    });
  }

  public async down() {
    this.schema.dropTable(this.products);
    this.schema.dropTable(this.categories);
  }
}
