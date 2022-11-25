import {Action, ActionCost, Item, ItemActions, ItemRating} from "../models/itemModels";
/** Core item interface for common actions */
export class ItemInterface<T extends Item> {
    private name: string;
    private rating: ItemRating;
    private actions: ItemActions;
    constructor(init: T) {
        this.name = init.name;
        this.actions = init.actions;
        this.rating = init.rating;
    }
    getName() {return this.name}
    getActions() {return this.actions}
    getRating() {return this.rating}
    /** Use an action on your turn, and  */
    useAction(action: Action) { 
        if (action?.cost !== undefined) this.payThePrice(action!.cost) 
    }
    /** Enforce the cost of an action */
    protected payThePrice(cost: ActionCost) {
        //TODO
    }
}
