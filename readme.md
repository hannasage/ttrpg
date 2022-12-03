# Tabletop Role-playing Games

>*This engine is in development. Getting Started instructions will be added once the engince has a production release.*

## Overview

Hello! My name is Kevin, I'm a software engineer who recently started enjoying tabletop roleplaying games with friends! Naturally, as I progressed through the "buy all the dice" phase, and "let me build a notebook" phase, I found myself unenthused with what I'd gathered. See, there's great digital tools out there for D&D, but most homebrew stuff you are forced to use secondary methods for keeping track of the growing rules, item upgrades, character progression, and more.

Then, I thought, "What if anyone could get in on this? What if I could build _my_ party's ruleset, but then Jane Doe could build her team's ruleset, and use the _same_ front-end client to reliably store and operate character sheets across any ruleset(s)?"

So, that's the vision for the `ttrpg` ecosystem: **an engine that enables easy creation of rules, and can be used to drive a single client application that allows a player to manage characters across infinite worlds.**

## The Engine

Much like a video game requires *many* engines to operate, doing everything from converting mathematics to computer geometry, and eventually cinematics and animation, to driving the controls and interaction, this engine exists to create a set of tabletop rpg objects, like characters and monsters, with defined rules. Each `ttrpg` rule module will export the gameplay tools with their rules applied, so a client may install the package and utilize the same gameplay-enhancing tools in-client across any rule module in the `ttrpg` ecosystem. 

The idea is that the engine drives _all_ gameplay functionality, and rulesets only define rules. As new client experiences are created with custom extension of the engine through the ruleset layer, these are the types of things considered in the scope of adoption for the engine.

>The long-term vision is a slew of requests for features in the engine, fueled by the creativity of tabletop gamers around the world using the engine to build various clients to enhance gameplay in unique ways. The engine will always remain open-source!

## Rule Modules

As mentioned, the engine itself exists to build a Rule Module; that is, a package utilizing the `ttrpg` engine, and existing on npm under the `@ttrpg/` scope! Every rule module must export all the [[#Required exports|required exports]] to integrate into the official `ttrpg` client, though the package quality is the responsibility the package maintainer. The official client will be set up to handle cases where rulesets do not properly configure their exports. 

#### Required exports

- *characterBuilder (Coming Soon)*
- *weaponBuilder (Coming Soon)*
- *wearableBuilder (Coming Soon)*
- *trinketBuilder (Coming Soon)*

## Client Applications

A good client app should be able to utilize any ruleset. If you wish to extend the functionality of a client with a ruleset implementing non-engine functionality, it's recommended you do so with caution, as these are not yet fully engine-supported. With the engine, a `ttrpg` client, codename: `homebrew-beyond`, will also be made available and open-source.

#### Official features

- *Character Creation (Coming Soon)*
- *Character sheet (Coming Soon)*
- *Inventory (Coming Soon)*
- *Create Weapons, Wearables, and Trinkets (Coming Soon)*
