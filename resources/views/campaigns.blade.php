@extends('layouts.wrapper')
@section('nav')
        
@endsection     
@section('content')
    <style>

    </style>
    <div class="container">
       
        <div class="manage-maps">
            <header> <h1>Campaigns</h1></header>
            
                 @foreach ($campaigns as $campaign)
                      
                        <a href="campaign/{{$campaign->id}}" class="campaign-item">
                            <h2>{{$campaign->name}}</h2>
                    
                            <p class>{{$campaign->description}}</p>  

                            <span class="poi">{{$campaign->maps()->count()}} Maps</span> <span class="badge">{{$campaign->entities()->count()}} Pages</span>
                        </a>
                     
                  @endforeach

            <footer class="controls">
                <a class="button" href="{{url("campaign/create")}}">
                    Start building your new Campaign
                </a>
            </footer>
        </div>
    </div>
@endsection

