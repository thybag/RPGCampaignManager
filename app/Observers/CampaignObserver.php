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
            'name'=> 'Welcome to '.$campaign->name, 
            'category'=>'Introduction'
        ]);
        $campaign->entities()->save($entity);

        $entity->blocks()->save(
            Block::make(
                [
                    'type'=>'text',
                     'content'=> "Welcome to your new campaign! \n Hit edit to update this content with whatever you like. \n \n Maps can be added via the top navigation bar."
                 ]
             )
        );
    }

}
