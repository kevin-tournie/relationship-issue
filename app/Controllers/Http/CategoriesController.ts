import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Category from "../../Models/Category";

export default class CategoriesController {
  public async create({ request, response }: HttpContextContract) {
    const account = await Category.create(request.body());

    return response.ok(account);
  }
}
