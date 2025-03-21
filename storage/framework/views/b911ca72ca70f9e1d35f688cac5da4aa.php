<!DOCTYPE html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <?php if(app()->environment('production')): ?>
            <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
        <?php endif; ?>
        <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">
        <?php
            $config = collect($page['props']['config']);
            $google_analytics = $config->firstWhere('key', 'google_analytics_tracking_id')['value'] ?? null;
            $favicon = $config->firstWhere('key', 'favicon')['value'] ?? null;
            $favicon = $favicon ? '/media/' . $favicon : '/images/favicon.png';
        ?>
        <!-- Dynamic Favicon -->
        <?php if($favicon): ?>
        <link rel="icon" href="<?php echo e(url($favicon)); ?>">
        <?php endif; ?>
        <link href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        <?php echo app('Illuminate\Foundation\Vite')(['resources/js/app.js', 'resources/css/app.css']); ?>
        <?php if (!isset($__inertiaSsrDispatched)) { $__inertiaSsrDispatched = true; $__inertiaSsrResponse = app(\Inertia\Ssr\Gateway::class)->dispatch($page); }  if ($__inertiaSsrResponse) { echo $__inertiaSsrResponse->head; } ?>
        <?php if(!empty($google_analytics)): ?>
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=<?php echo e($google_analytics); ?>"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '<?php echo e($google_analytics); ?>');
        </script>
        <?php endif; ?>
    </head>
    <body>
        <?php if (!isset($__inertiaSsrDispatched)) { $__inertiaSsrDispatched = true; $__inertiaSsrResponse = app(\Inertia\Ssr\Gateway::class)->dispatch($page); }  if ($__inertiaSsrResponse) { echo $__inertiaSsrResponse->body; } else { ?><div id="app" data-page="<?php echo e(json_encode($page)); ?>"></div><?php } ?>
    </body>
</html><?php /**PATH /home/savadata/check.belovevn.com/public/resources/views/app.blade.php ENDPATH**/ ?>