/** Core attributes for an item */
export interface Item {
    name: string;
}
/** Core action */
export interface Action {
    name: string;
    description: string;
}
/** Core actions a weapon can take */
export interface WeaponActions {
    action: Action;
    bonusAction: Action[];
    buffs: Action[];
}
/** Core weapon rating values */
export enum WeaponRating {
    POOR = "poor",
    FINE = "fine",
    GOOD = "good",
    GREAT = "great",
    PRISTINE = "pristine"
}
/** Core attributes for a weapon */
export interface Weapon extends Item {
    range: number;
    actions: WeaponActions;
    damage: number;
    rating: WeaponRating;
    limit?: number;
}