<a href="https://fonolo.com" target="_blank"><img src="https://portal.fonolo.com/static/1.0/images/fonolo_logo_large.png"/></a>

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

### v1.0.1
* Added support for the realtime and scheduled call-backs view.
* Added support for the timezones endpoint

### v1.0.0
* Initial release.

[fonolo dev site]:  https://fonolo.com/help/api/
