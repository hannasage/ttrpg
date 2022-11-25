import {Action, ActionCost, WeaponItem} from "../models/itemModels";
import {ItemInterface} from "./itemInterface";
export class Weapon extends ItemInterface<WeaponItem> {
    private range: number;
    private damage: string;
    private limit?: number | undefined;
    constructor(init: WeaponItem) {
        super(init);
        this.range = init.range;
        this.damage = init.damage;
        this.limit = init.limit;
    }
    getRange() {return this.range}
    getDamage() {return this.damage}
    getLimit() {return this.limit}
}
export class WeaponInterface extends Weapon {
    constructor(builderOutput: WeaponItem) { super(builderOutput) }
    /** Use an action on your turn */
    useAction(action: Action) { 
        //TODO
    }
    /** Enforce the cost of an action */
    protected payThePrice(cost: ActionCost) {
        //TODO
    }
}
