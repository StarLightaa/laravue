<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravue Project</title>

        <link href="{{ asset('css/bootstrap.min.css') }}" rel="stylesheet">

        <!-- Custom fonts for this template -->
        <link href="{{ asset('css/fonts/fontawesome-free/css/all.min.css') }}" rel="stylesheet" type="text/css">
        <link href='https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>

        <!-- Custom styles for this template -->
        {{-- <link href="{{ asset('css/style.css') }}" rel="stylesheet"> --}}
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    </head>
    <body>
      <div id="app"></div>

      <!-- Bootstrap core JavaScript -->
      <script src="{{ asset('js/jquery.min.js') }}"></script>
      <script src="{{ asset('js/bootstrap.min.js') }}"></script>
      <!-- Custom scripts for this template -->
      <script src="{{ asset('js/main.js') }}"></script>
      <script src="{{ asset('js/app.js') }}"></script>
      <script src="{{ asset('js/footer.js') }}"></script>
    </body>
</html>
