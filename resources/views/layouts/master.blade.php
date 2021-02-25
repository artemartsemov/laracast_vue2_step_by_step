<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My First SPA</title>
    <link rel="stylesheet" href="/css/app.css">
</head>
<body class="p-5">
    <div id="app">
        <ul class="nav">
        <li class="nav-item">
            <router-link to="/" exact class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/contact" class="nav-link">Contact</router-link>
        </li>
        </ul>
        <router-view></router-view>
    </div>

    <script src="/js/app.js"></script>
</body>
</html>
