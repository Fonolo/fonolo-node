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
    const api = 'call';

    return function(_call_id)
    {
        var object = {

            get: function(_callback)
            {
                var opts = {
                    uri: api + '/' + _call_id
                };

                return _client.get(opts).run_callback(_callback);
            }
        };

        return object;
    }
};
