@extends('layouts.app')

@section('content')

<div class="container">
    <form class="form" method="POST" action="{{ route('verification.resend') }}">
        <header>
            <h2>{{ __('Please verify your email address') }}</h2>
        </header>
        <div>
            @if (session('resent'))
                <span class="notice" role="alert">
                    {{ __('A fresh verification link has been sent to your email address.') }}
                </span>
            @endif

            <p>We need to verify your email address before you can start using RPG Campaign Manager.
            <p>Please check your email for a verification link. If you are unable to find it, you can request a new one by using the button below.</p>
        </div>
    
         @csrf
        <footer>
            <input type="submit" class="full" value="Send new email verification link" />
        </footer>
    </form>
</div>

@endsection
