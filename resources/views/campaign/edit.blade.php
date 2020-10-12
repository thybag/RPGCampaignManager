@extends('layouts.app')
@section('nav')
    @if (!empty($campaign))
        <a href="{{url('campaign/'.$campaign->id)}}">Campiagn view</a>
        <a href="{{url('campaign/'.$campaign->id.'/map')}}">Maps</a>
        <a href="{{url('campaign/'.$campaign->id.'/image')}}">Images</a>
    @endif
@endsection     
@section('content')
    <div class="container">
        <form class="form" method="POST" action="{{url('campaign' .(!empty($campaign) ? '/'.$campaign->id :''))}}">
            <header><h2>{{empty($campaign) ? 'New Campaign' : "Edit ".$campaign->name }}</h2></header>
            <div>
                @include('partials.input', [
                    'label' => 'Name',
                    'name'  =>'name',
                    'type'  =>'text',
                    'model' => $campaign ?? null,
                    'placeholder' => 'The saga of...' 
                ])
            </div>
            <div>
                @include('partials.input', [
                    'label' => 'Description',
                    'name'  => 'description',
                    'type'  => 'textarea',
                    'model' => $campaign ?? null,
                ])
            </div>

           
            @if (!empty($campaign)) 
            <div>
                @include('partials.select', [
                        'label' => 'Default map',
                        'name'  => 'default_map_id',
                        'options' => $campaign->maps,
                        'model' => $campaign,
                        'none' => 'No Map'
                ])
            </div>
            <div>
                @include('partials.select', [
                        'label' => 'Default Entity',
                        'name'  => 'default_entity_id',
                        'options' => $campaign->entities,
                        'model' => $campaign,
                ])
            </div>

            




                @method('PUT')
            @endif


             @csrf
            <footer>
                <input type="submit" class="right" value="{{empty($campaign) ? 'Create campaign' : "Save changes" }}">
                <a class="button cancel" href="{{url('/')}}">Back</a>
            </footer>
        </form>
    </div>
@endsection
