<a href="https://fonolo.com" target="_blank">
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://cdn.fonolo.com/assets/github/logo_dark.svg">
  <img alt="Fonolo" src="https://cdn.fonolo.com/assets/github/logo_light.svg" width="400">
</picture>
</a>

# Node.js Client Library

The official Node.js binding for the Fonolo Call-Back Service.

## Prerequisites

Before using this library, you must have:

* A Fonolo Account; visit [fonolo.com](https://fonolo.com/) for more details.
* a valid Fonolo Account SID and Auth Token, available from the [Fonolo Portal](https://portal.fonolo.com/)
* Node.js v7 or higher

## Installation

```
npm install fonolo
```

## Quickstart

### Get a List of Call-Backs

Query the Fonolo API for a list of call-backs between July 1st and Aug 1st, 2017:


```
var client = require('fonolo')(<account sid>, <auth token>);

client.calls.get(
{
    start_date: '2017-07-01',
    end_date: '2017-08-01'

}).then(data => {

    console.log(JSON.stringify(data, null, 2));

}).catch(err => {

    console.log(err);
});
```

## Documentation

Full API documentation is available from the [Fonolo developer site.][fonolo dev site]

## Release History

### v1.0.3
* Added support for the /optin and /optins endpoints for viewing call-back opt-in requests.

### v1.0.2
* Added support for the pending call-backs view (/pending endpoint)

### v1.0.1
* Added support for the realtime and scheduled call-backs view.
* Added support for the timezones endpoint

### v1.0.0
* Initial release.

[fonolo dev site]:  https://fonolo.com/help/api/
