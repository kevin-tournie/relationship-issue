import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Product from "../../Models/Product";

export default class ProductsController {
  public async create({ request, response }: HttpContextContract) {
    const account = await Product.create(request.body());

    return response.ok(account);
  }

  public async find({ request, response }: HttpContextContract) {
    const { id } = request.params();

    const product = await Product.findOrFail(id);
    await product.load("category");
    /**
     * Alternative (mais retourne un tableau)
     * const product = await Product.query().where(id, 'id').preload('category')
     */

    return response.ok(product);
  }
}
