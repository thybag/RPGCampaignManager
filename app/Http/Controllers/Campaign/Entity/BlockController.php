<?php

namespace App\Http\Controllers\Campaign\Entity;

use App\Models\Campaign;
use Illuminate\Http\Request;
use App\Models\Campaign\Entity;
use App\Http\Controllers\Controller;
use App\Models\Campaign\Entity\Block;
use App\Http\Resources\Campaign\Entity\BlockResource;

class BlockController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Block::class, 'block');;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Campaign $campaign, Entity $entity)
    {
        $block = new Block(['content' => $request->input('data.content'), 'type' => 'text']);
        $entity->blocks()->save($block);
        return new BlockResource($block);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Block  $block
     * @return \Illuminate\Http\Response
     */
    public function show(Campaign $campaign, Entity $entity, Block $block)
    {

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Block  $block
     * @return \Illuminate\Http\Response
     */
    public function edit(Campaign $campiagn, Entity $entity, Block $block)
    {

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Block  $block
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Campaign $campaign, Entity $entity, Block $block)
    {
        $block->update(['content' => $request->input('data.content')]);
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
        //
    }
}
