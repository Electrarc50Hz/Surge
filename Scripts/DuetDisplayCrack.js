/*DuetDisplayCrack by @Yu9191*/

var objc = JSON.parse($response.body);

    objc = {
  "success": true,
  "products": [
    {
      "vendor": "apple",
      "product": "DuetAirAnnual",
      "subscriptionId": 391961,
      "purchaseDate": "2023-11-14T19:47:25Z",
      "cancelled": false,
      "expiresDate": "2099-11-09T19:47:22Z",
      "inTrial": true
    }
  ],
  "hasStripeAccount": false
}

$done({body : JSON.stringify(objc)});
