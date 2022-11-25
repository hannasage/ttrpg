import {WeaponItem} from "../models/itemModels";
import {ItemInterface} from "./itemInterface";
/** Class for accessing weapon properties */
export class Weapon extends ItemInterface<WeaponItem> {
    private range: number;
    private damage: string;
    private limit: number | undefined;
    constructor(init: WeaponItem) {
        super(init);
        this.range = init.range;
        this.damage = init.damage;
        this.limit = init?.limit;
    }
    getRange() {return this.range}
    getDamage() {return this.damage}
    getLimit() {return this.limit}
}
/** Core interface for using a weapon */
export class WeaponInterface extends Weapon {
    constructor(builderOutput: WeaponItem) { super(builderOutput) }
}
