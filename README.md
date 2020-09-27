# RPG Campaign Manager

A fully Open-Source RPG Campaign Manager and World Building tool.

This tool is currently in early development and not ready for general use. Signification portions of functionality have yet to be implemented and what is there remains very buggy. 

I **strongly** recommend not hosting this on a public server until the policy, auth and validation checks have been fully implemented, as currently people will be able to write data to each others accounts.

## Key features

* Create and manage multiple custom maps. Just upload a map image and draw/add your points of interest.
* Create multiple "entity" types; Locations, buildings, NPC's, Players, Items, Events etc.
* Create multiple Campaigns.
* Manage content using markdown.

## Missing features

* Setup of requests (validation), Policy checks (confirm ownerships) and Better auth flow (email verification if none local).
* Upload images to entity content.
* Filtering sidebar content (This also does not yet update)
* Move off of generated bootstrap entirely + setup better styling for all pages.
* Remove maps, campaigns, entities.
* Add existing entities to maps.
* More content types - for example stat blocks for common RPG style games.
* Some proper tests & CI.
* Utils "cli", to allow commands like `d6 2` to provide the values of 2 d6 rolls.

## Getting started

This project is based on Laravel, so easy to get setup and working locally. You will need PHP & MYSQL available.

```
git clone git@github.com:thybag/RPGCampaignManager.git
```
```
composer install && npm install 
```

Copy the `.env` and update with your own database and serve values.

```
php artisan storage:link
php artisan migrate
npm run watch
```

At this point, you should be able to access the app from the public directory, "register" your own account and start your first campaign.

## Help out?

If your interested in contributing to OSS, this project is super early days and based on a pretty standard PHP stack (Laravel, Leaflet etc.) so any help would be much appreciated. Please drop me a line on Github and I'm happy to point you in the right direction. I'm also open to direct PR's (Although theres a large risk of breaking changes / duplication of work given how early on everything is).

In addition to dev work, if anyone has a nice map image they'd be happy to be used in screenshot of the tool in use, please get in touch.
