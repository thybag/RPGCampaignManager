@extends('layouts.app')

@section('content')
<div class="container">
    <form class="form" method="POST" action="{{ route('password.email') }}">
        <header>
            <h2>{{ __('Reset Password') }}</h2>
        </header>
        <div>
            @if (session('status'))
                <span class="notice" role="alert">
                    If the email provided matched an account in our database, it will receave a password reset link shortly.
                </span>
            @endif
            @error('email')
                <span class="notice" role="alert">
                    If the email provided matched an account in our database, it will receave a password reset link shortly.
                </span>
            @enderror
            <label for="email">Email:</label>
            <input id="email" type="email" name="email" required autocomplete="email" autofocus>
        </div>
       
        @csrf

        <footer>
            <input type="submit" class="full" value="Send Password Reset Link" />
        </footer>
    </form>
</div>

@endsection
