# RPG Campaign Manager

A fully Open-Source RPG Campaign Manager and World Building tool.

Please note, this tool is still in development and not ready for production use. Some areas of functionality are still incomplete and likely buggy. Feedback and bug reports are much appreciated. It is not recommend to to run this on a public server until a stable version is released.

![image](https://user-images.githubusercontent.com/887397/95174567-27e7ae00-07b2-11eb-9877-dbce0eab12c9.png)

## Key features

#### Unlimited Campaigns/Worlds
* Create as many campaigns or worlds as you'd like. Each with their own maps, content and imagery.

#### Unlimited Maps
* Any image can become an interactive map. Just upload your map image, and start adding your points of interest.
* Both markers and areas can be drawn on and linked to your content.

#### Unlimited content
* Create and manage as many interlinked content entry's as you like.
* Edit your content with markdown and drag/drop uploading for any images you'd like to embed.
* Easily interlink your content using `[[name]]`.
* Content can be linked to your map, or stand alone. It can all be easily filtered and categorized by the left menu.
* Freely categorize content; Locations, buildings, NPC's, Items, events, players or anything else.

#### Manage media
* Easily manage your uploaded images, maps and other data via the UI.

## Setup

This project is based on Laravel, so easy to get setup and working locally. You will need up to date PHP & MySQL available.

First off clone the repository down to where you'd like it to run.

```
git clone git@github.com:thybag/RPGCampaignManager.git
```

Navigate inside the cloned folder and run the following to install dependencies via composer, set app keys & link storage.

```
composer install && cp .env.example .env && php artisan key:generate && php artisan storage:link
```
Once the above is complete, open `.env` and replace the database settings with your local databases own details. 

After that hit migrate.

```
 php artisan migrate
```

At this point, you should be able to access the application from the public directory, You can now "register" your first user account and start your first campaign.

## Development setup

In addition to the above steps, to start building/working on the front end you will need to npm install and start the watch task.

```
npm install && npm run watch
```

## Help out?

If your interested in contributing to OSS, this project is super early days and based on a pretty standard PHP stack (Laravel, Leaflet etc.) so any help would be much appreciated. Please drop me a line on Github and I'm happy to point you in the right direction. I'm also open to direct PR's (Although theres a large risk of breaking changes / duplication of work given how early on everything is).

In addition to dev work, if anyone has a nice map image they'd be happy to be used in screen shot of the tool in use, please get in touch.
