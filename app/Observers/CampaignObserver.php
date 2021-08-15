<?php

namespace App\Observers;

use App\Models\Campaign;
use App\Models\Campaign\Entity;
use App\Models\Campaign\Entity\Block;

class CampaignObserver
{
    /**
     * Handle the campaign "created" event.
     *
     * @param  \App\Campaign  $campaign
     * @return void
     */
    public function created(Campaign $campaign)
    {
        // New campaign needs sample content
        $entity = Entity::make([
            'name'=> 'Welcome to ' . $campaign->name,
            'category'=>'Introduction'
        ]);
        $campaign->entities()->save($entity);
        $campaign->update(['default_entity_id' => $entity->id]);

        $entity->blocks->first()->update(
            [
                'content' => implode(
                    "\n",
                    [
                        "Welcome to your new RPG Campaign! \n",
                        " * To add a map, select the main menu (top right) and Campaign maps.",
                        " * To add a content section, hit New... on the left hand menu.",
                        " * You can add images to content by dragging them in to the text area.",
                        "\n",
                        "Thanks for trying RPG Campaign Manager."
                    ]
                )
             ]
        );
    }
}
