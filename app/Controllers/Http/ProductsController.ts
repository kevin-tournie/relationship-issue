import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Product from "../../Models/Product";
import Database from "@ioc:Adonis/Lucid/Database";

export default class ProductsController {
  public async create({ request, response }: HttpContextContract) {
    const account = await Product.create(request.body());

    return response.ok(account);
  }

  public async find({ request, response }: HttpContextContract) {
    const { id } = request.params();

    // const product = await Product.findOrFail(id);
    // await product.load("category");

    // Alternative 1

    // const product = await Product.query().where("id", id).preload("category");

    // Alternative 2 (surement la plus optimisée)

    const product = await Database.query()
      .select(
        "p.id",
        "p.name as product_name",
        "p.state",
        "c.name as category_name"
      )
      .from("products as p")
      .where("p.id", id)
      .leftJoin("categories as c", "c.id", "=", "p.category_id");

    return response.ok(product);
  }
}
