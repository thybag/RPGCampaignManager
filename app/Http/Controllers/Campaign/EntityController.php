<?php

namespace App\Http\Controllers\Campaign;

use App\Models\Campaign;
use Illuminate\Http\Request;
use App\Models\Campaign\Entity;
use App\Http\Controllers\Controller;
use App\Http\Resources\Campaign\EntityResource;

class EntityController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Entity::class, 'entity');;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

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
    public function store(Request $request, Campaign $campaign)
    {
        $entity = new Entity([
            'name'      => $request->input('data.name'),
            'category'  => $request->input('data.category'),
            'map_id'    => $request->input('data.map_id'),
            'geo'       => $request->input('data.geo')
        ]);

        $campaign->entities()->save($entity);
        return new EntityResource($entity);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Entity  $entity
     * @return \Illuminate\Http\Response
     */
    public function show(Campaign $campaign, Entity $entity)
    {
        return new EntityResource($entity);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Entity  $entity
     * @return \Illuminate\Http\Response
     */
    public function edit(Campaign $campaign, Entity $entity)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Entity  $entity
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Campaign $campaign, Entity $entity)
    {
        $updates = [];
        if ($request->has('data.name')) $updates['name'] = $request->input('data.name');
        if ($request->has('data.category')) $updates['category'] = $request->input('data.category');
        if ($request->has('data.map_id')) $updates['map_id'] = $request->input('data.map_id');
        if ($request->has('data.geo')) $updates['geo'] = $request->input('data.geo');

        $entity->update($updates);
        return new EntityResource($entity);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Entity  $entity
     * @return \Illuminate\Http\Response
     */
    public function destroy(Campaign $campaign, Entity $entity)
    {
        //
    }
}
