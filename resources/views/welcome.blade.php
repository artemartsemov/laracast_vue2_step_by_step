<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <script src="{{ asset('js/app.js') }}" defer></script>
</head>

<body>
<div class="container">
    <div class="row flex-column justify-content-center m-4">
        <div id="one">
            <h2>@{{ user.name }}</h2>
        </div>
        <div id="two">
            <h2>@{{ user.name }}</h2>
        </div>
    </div>
</div>
</body>

</html>
