<?php
return [
   'paths' => ['api/*'],
   'allowed_methods' => ['*'],
   'allowed_origins' => [
       'https://pauf-examen-mayo-frontend.onrender.com'
   ],
   'allowed_headers' => ['*'],
   'exposed_headers' => [],
   'max_age' => 0,
   'supports_credentials' => false,
];
