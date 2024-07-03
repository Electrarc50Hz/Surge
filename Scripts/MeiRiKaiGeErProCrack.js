/*MeiRiKaiGeErProCrack by @ddgksf2013*/

var body = $response.body.replace(/lock":\w+/g, 'lock":false').replace(/isSubscriber":\w+/g, 'isSubscriber":true')  
$done({ body });
