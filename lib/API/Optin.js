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
    const api = 'optin';

    return function(_optin_id)
    {
        var object = {

            get: function(_callback)
            {
                var opts = {
                    uri: api + '/' + _optin_id
                };

                return _client.get(opts).run_callback(_callback);
            }
        };

        return object;
    }
};
