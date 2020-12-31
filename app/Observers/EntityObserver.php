<?php

namespace App\Observers;

use App\Models\Campaign;
use App\Models\Campaign\Entity;
use App\Models\Campaign\Entity\Block;

class EntityObserver
{
    /**
     * Handle the Entity "created" event.
     *
     * @param  \App\Campaign\Entity  $entity
     * @return void
     */
    public function created(Entity $entity)
    {
    	// create initial block
        $entity->blocks()->save(
         	Block::make(['type' => 'text', 'content' => ''])
        );
    }
}