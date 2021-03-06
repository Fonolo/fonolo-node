//
// This file is part of the Fonolo Node Wrapper package.
//
// (c) Foncloud, Inc.
//
// For the full copyright and license information, please view the LICENSE
// file that was distributed with this source code.
//

'use strict';

var request = require('request');
var promise = require('./Promise');
var Client = require('./Client');

//
// global settings
//
var defaults = {

    api_url: 'https://api.fonolo.com/3.0/',
    api_format: 'json',
    verify_ssl: true
};

//
// the main client
//
Client = function(_account_sid, _api_token, _options)
{
    if ( (!_account_sid) || (!_api_token) )
    {
        throw 'invalid API account SID or auth token provided.';
    }

    //
    // set up the local object
    //
    this.options        = _options;
    this.api_url        = defaults.api_url;
    this.api_format     = defaults.api_format;
    this.verify_ssl     = defaults.verify_ssl;
    this.account_sid    = _account_sid;
    this.api_token      = _api_token;

    //
    // the resources
    //
    this.call               = require('./API/Call')(this);
    this.calls              = require('./API/Calls')(this);
    this.optin              = require('./API/Optin')(this);
    this.optins             = require('./API/Optins')(this);
    this.callback           = require('./API/CallBack')(this);
    this.profile            = require('./API/Profile')(this);
    this.profiles           = require('./API/Profiles')(this);
    this.realtime           = require('./API/Realtime')(this);
    this.pending            = require('./API/Pending')(this);
    this.scheduled          = require('./API/Scheduled')(this);
    this.timezones          = require('./API/Timezones')(this);
};

Client.prototype.request = function(_options, _callback)
{
    //
    // build the URI based on the request URL
    //
    _options.uri = this.api_url + _options.uri + "." + this.api_format;

    //
    // response data is always JSON
    //
    _options.json = true;

    //
    // build the auth headers
    //
    var auth = "Basic " + new Buffer(this.account_sid + ":" + this.api_token).toString("base64");
    _options.headers = {

        "Authorization": auth
    };

    //
    // always use strict SSL
    //
    _options.strictSSL = this.verify_ssl;

    //
    // used gzip
    //
    _options.gzip = true;

    //
    // make the request and handle the call-back
    //
    return new promise(function(_resolve, _reject)
    {
        request(_options, function(_err, _res, _body)
        {
            if (_err)
            {
                _reject(_err);

            } else if (_body.head.status != 200)
            {
                _reject(_body.head.message);

            } else
            {
                _resolve(_body);
            }
        });

    }).run_callback(_callback);
};
Client.prototype.endpoint = function(_endpoint)
{
    this.api_url = _endpoint;
};
Client.prototype.verifySSL = function(_verify)
{
    this.verify_ssl = _verify;
};
Client.prototype.get = function(_options, _callback)
{
    _options.method = 'GET';
    return this.request(_options).run_callback(_callback);
};
Client.prototype.post = function(_options, _callback)
{
    _options.method = 'POST';
    return this.request(_options).run_callback(_callback);
};

module.exports = Client;
