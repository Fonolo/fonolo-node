//
// This file is part of the Fonolo Node Wrapper package.
//
// (c) Foncloud, Inc.
//
// For the full copyright and license information, please view the LICENSE
// file that was distributed with this source code.
//

'use strict';

module.exports = function(_client)
{
    const api = 'callback';

    return function(_call_id)
    {
        return {

            start: function(_opts, _callback)
            {
                var opts = {
                    uri: api,
                    form: _opts
                };

                return _client.post(opts).run_callback(_callback)
            },
            status: function(_opts, _callback)
            {
                var opts = {
                    uri: api + '/' + _call_id + '/status'
                };

                return _client.get(opts).run_callback(_callback)
            },
            cancel: function(_opts, _callback)
            {
                var opts = {
                    uri: api + '/' + _call_id + '/cancel'
                };

                return _client.post(opts).run_callback(_callback)
            }
        };
    }
};
