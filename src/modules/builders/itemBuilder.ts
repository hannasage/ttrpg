import {BuilderWithMiddleware, SetupBuilder} from "../../utils/builderWithMiddleware";
import {Item} from "../core/models/itemModels";

/** The highest-order parent of any item classes */
class ItemBuilder extends BuilderWithMiddleware<Item> {
    constructor({ validators, baseline }: SetupBuilder<Item>) {
        super({ validators, baseline })
    }
    /** Set weapon name with runtime validation */
    setName(name: string) { this.setAttr("name", name) }
}
//TODO: Build an item factory
export class WeaponBuilder extends ItemBuilder {}
export class ArmorBuilder extends ItemBuilder {}
export class MaterialBuilder extends ItemBuilder {}