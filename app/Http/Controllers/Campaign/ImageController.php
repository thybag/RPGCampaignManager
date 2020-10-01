<?php

namespace App\Http\Controllers\Campaign;

use App\Models\Campaign;
use Illuminate\Http\Request;
use App\Models\Campaign\Image;
use App\Http\Controllers\Controller;
use App\Http\Resources\Campaign\ImageResource;

class ImageController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Image::class, 'image');;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Campaign $campaign)
    {
        return view('image.index', ['campaign' => $campaign]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Campaign $campaign)
    {
       return view('image.edit', ['campaign' => $campaign]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Campaign $campaign)
    {
        $image = Image::upload($campaign, $request->file('image'), $request->name);

        if ($request->ajax()) {
            return new ImageResource($image);
        }
        return redirect(url("campaign/{$campaign->id}/image/". $image->id ."/edit"));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function show(Campaign $campaign, Image $image)
    {
        return new ImageResource($image);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function edit(Campaign $campaign, Image $image)
    {
        return view('image.edit', ['campaign' => $campaign, 'image' => $image]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Campaign $campaign, Image $image)
    {
        $image->name = $request->name;
        $image->swap($request->file('image'));
        $image->save();

        return redirect(url("campaign/{$campaign->id}/image/".$image->id ."/edit"));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function destroy(Campaign $campaign, Image $image)
    {
        $image->delete();
    }
}
