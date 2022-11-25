# Tabletop Role-playing Games

A node package for those who enjoy sitting around tables, crawling dungeons, and otherwise causing mayhem in fictional worlds.

## Why make an `npm` package for a _tabletop_ game?

This package will provide semi-configurable utilities that generate common ttrpg data structures, such as a character, weapon, character sheet, inventory, abilities, etc. The reason I say _semi_-configurable is because, while things like `Character.race` and `Character.role` can vary from game system to game system, typically we adopt norms, such as the 9 various alignments.

What this package doesn't concern itself with is what you _do_ with those items thereafter! You can send them off to be stored in a database somewhere as a part of a bespoke platform you and your friends use to play D&D, or just build an item comparison tool show off your skills.

## How will we achieve this?

Objectively, the character and closely-related elements are the _most_ important, as everyone at the table can utilize a character sheet, whether it's the players themselves tracking in-game changes or the DM checking a player's `DEX` modifier, there's use for all. That said, the following considerations have been made for the initial release:

### v1.0.0

By this release, a user of this library will be able to:

- Create a `Character` with input validation
- See and track character stats and changes in-game through `Character.sheet`
- See and track equipped/stored items using `Character.inventory`
- Create a custom `Item` with input validation (weapon, armor, etc.)
- An effect can be applied to a `Character` when an `Item` interacts
- ...and more!

Obviously, to get to this ambitious v1 goal, a strong mvp would help.

### v0.7.0-beta 

`#mvp` `#in-progress`

In this initial release, the `ttrpg` npm package will be installable, and configurable with character classes and races. It will be able to generate type-safe characters and weapons using `Builder` classes.

More on the characters, this release will make available a static character sheet. In the first full release, this sheet will become interactive so you can track progress in-game. Beyond this, even, the character sheet will become configurable with unique sills and more.

Similarly, a character will have an established inventory that add and remove items. In later releases, the system will be expanded to include optional tracking of weight carried, and an equip/remove system for wearables.

