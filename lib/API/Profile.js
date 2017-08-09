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
    const api = 'profile';

    return function(_call_id)
    {
        var object = {

            get: function(_callback)
            {
                var opts = {
                    uri: api + '/' + _call_id
                };

                return _client.get(opts).run_callback(_callback);
            },
            option: function(_option_id)
            {
                var data_object = {

                    get: function(_callback)
                    {
                        var opts = {
                            uri: api + '/' + _call_id + '/option/' + _option_id
                        };

                        return _client.get(opts).run_callback(_callback);
                    },
                    schedule: {

                        get: function(_callback)
                        {
                            var opts = {
                                uri: api + '/' + _call_id + '/option/' + _option_id + '/schedule'
                            };

                            return _client.get(opts).run_callback(_callback);
                        }
                    }
                }

                return data_object;
            },
            options: {

                get: function(_callback)
                {
                    var opts = {
                        uri: api + '/' + _call_id + '/options'
                    };

                    return _client.get(opts).run_callback(_callback);
                }
            },
            question: function(_question_id)
            {
                var data_object = {

                    get: function(_callback)
                    {
                        var opts = {
                            uri: api + '/' + _call_id + '/question/' + _question_id
                        };

                        return _client.get(opts).run_callback(_callback);
                    }
                }

                return data_object;
            },
            questions: {

                get: function(_callback)
                {
                    var opts = {
                        uri: api + '/' + _call_id + '/questions'
                    };

                    return _client.get(opts).run_callback(_callback);
                }
            },
            scheduling: {

                get: function(_callback)
                {
                    var opts = {
                        uri: api + '/' + _call_id + '/scheduling'
                    };

                    return _client.get(opts).run_callback(_callback);
                }
            }
        };

        return object;
    }
};
