/** Core weapon rating values */
export enum ItemRating {
    BROKEN = "broken",
    POOR = "poor",
    FINE = "fine",
    GOOD = "good",
    GREAT = "great",
    PRISTINE = "pristine"
}
/** The cost of an action */
export interface ActionCost {
    resource: string;
    amount: string;
}
/** Core action */
export interface Action {
    name: string;
    description: string;
    cost?: ActionCost
}
/** Core actions an item can make */
export interface ItemActions {
    action: Action;
    bonusAction: Action[];
    buffs: Action[];
}
/** Core attributes for an item */
export interface Item {
    name: string;
    actions: ItemActions;
    rating: ItemRating;
}

/** Core attributes for a weapon */
export interface WeaponItem extends Item {
    range: number;
    damage: string;
    limit?: number;
}