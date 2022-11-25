import {Item, ItemActions, ItemRating} from "../models/itemModels";
/** Core item interface */
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
}
