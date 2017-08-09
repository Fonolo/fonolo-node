//
// This file is part of the Fonolo Node Wrapper package.
//
// (c) Foncloud, Inc.
//
// For the full copyright and license information, please view the LICENSE
// file that was distributed with this source code.
//

var chai = require('chai'),
    expect = chai.expect,
    fonolo = require('../../lib/index');

describe('Fonolo Library', function()
{
    it('should be a constructor', function()
    {
        expect(fonolo).to.be.a('function');
    });

    it('should required API credentials', function()
    {
        try
        {
            client = new fonolo();
        } catch(err)
        {
            expect(err).to.equal('invalid API account SID or auth token provided.');
        }
    });
});
