import {
  BaseModel,
  type HasMany,
  column,
  hasMany,
} from "@ioc:Adonis/Lucid/Orm";
import Product from "./Product";

export default class Category extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public name: string;

  @column()
  public state: number;

  @hasMany(() => Product)
  public products: HasMany<typeof Product>;
}
