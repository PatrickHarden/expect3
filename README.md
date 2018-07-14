# React-Static - Wordpress Integration

Installation intructions:

1. Create new wordpress site

2. Install plugins:
    - Better REST API Featured Images
    - LMS-EX3 Core Functionality
    - Root Relative URLs
    - Wordpress Importer
    - WP Offload S3 Lite

3. Add these lines to the config.php in wordpress

    define( 'DBI_AWS_ACCESS_KEY_ID', 'AKIAJFBYMF2774IYXD4Q' ); 
    define( 'DBI_AWS_SECRET_ACCESS_KEY', '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' );

    define( 'NETLIFY_DEPLOY_WEBHOOK', 'https://api.netlify.com/build_hooks/5af35b343672df4d25561405' ); 

4. Import wordpress from template xml file

5. Change baseURL in static.config.js
