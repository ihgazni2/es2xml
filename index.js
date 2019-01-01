const esm = require('./descmat')
const e2x = require('./es2xml')


module.exports = {
    xml:e2x.xml,
    esmat:esm.getDescMat,
    pldfs:esm.getRplDFS,
    locdfs:esm.getLocDFS,
    attrdfs:esm.getAttribDFS,
    plwfs:esm.getRplWFS,
    locwfs:esm.getLocWFS
}
