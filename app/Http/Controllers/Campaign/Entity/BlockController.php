<?php

namespace App\Http\Controllers\Campaign\Entity;

use App\Models\Campaign;
use Illuminate\Http\Request;
use App\Models\Campaign\Entity;
use App\Http\Controllers\Controller;
use App\Models\Campaign\Entity\Block;
use App\Http\Requests\Campaign\Entity\BlockRequest;
use App\Http\Resources\Campaign\Entity\BlockResource;

class BlockController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Block::class, 'block');
    }

    /**
     * show a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function show(Campaign $campaign, Entity $entity, Block $block)
    {
        return new BlockResource($block);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(BlockRequest $request, Campaign $campaign, Entity $entity)
    {
        $block = new Block($request->validated()['data']);
        $entity->blocks()->save($block);
        return new BlockResource($block);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Block  $block
     * @return \Illuminate\Http\Response
     */
    public function update(BlockRequest $request, Campaign $campaign, Entity $entity, Block $block)
    {
        $block->update($request->validated()['data']);
        return new BlockResource($block);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Block  $block
     * @return \Illuminate\Http\Response
     */
    public function destroy(Block $block)
    {
    }
}
