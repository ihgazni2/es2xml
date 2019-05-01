const esm = require('./descmat')
const e2x = require('./es2xml')
const srch = require('./srch')

module.exports = {
    xml:e2x.xml,
    esmat:esm.getDescMat,
    pldfs:esm.getRplDFS,
    locdfs:esm.getLocDFS,
    attrdfs:esm.getAttribDFS,
    plwfs:esm.getRplWFS,
    locwfs:esm.getLocWFS,
    NODE_TYPES:srch.NODE_TYPES,
    typesrch:srch.viaTypeEngine,
    typetbl:srch.getTypeTable,
    codechain:srch.getCodeChain,
}
