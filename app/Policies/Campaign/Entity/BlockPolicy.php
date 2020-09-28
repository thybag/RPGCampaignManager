<?php

namespace App\Policies\Campaign\Entity;

use Request;
use App\Models\User;
use App\Policies\BasePolicy;
use App\Models\Campaign\Entity\Block;

class BlockPolicy extends BasePolicy
{
    /**
     * Determine whether the user can view any models.
     *
     * @param  \App\Models\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        $entity = Request::route('entity');
        return ($this->userOwnsCampaign($user) && $this->ownedByCampaign($entity));
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\User  $user
     * @param  Block $block
     * @return mixed
     */
    public function view(User $user, Block $block)
    {
        $entity = Request::route('entity');
        return ($this->userOwnsCampaign($user) && $this->ownedByCampaign($entity) && $block->entity_id == $entity->id);
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        $entity = Request::route('entity');
        return ($this->userOwnsCampaign($user) && $this->ownedByCampaign($entity));
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Campaign\Entity\Block  $block
     * @return mixed
     */
    public function update(User $user, Block $block)
    {
        $entity = Request::route('entity');
        return ($this->userOwnsCampaign($user) && $this->ownedByCampaign($entity) && $block->entity_id == $entity->id);
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Campaign\Entity\Block  $block
     * @return mixed
     */
    public function delete(User $user, Block $block)
    {
        $entity = Request::route('entity');
        return ($this->userOwnsCampaign($user) && $this->ownedByCampaign($entity) && $block->entity_id == $entity->id);
    }
}