const esm = require('./descmat')
const e2x = require('./es2xml')
const srch = require('./srch')
const exdict = require("exdict")
const elel = require("elist")


function getPlNodeMap(ast,pldfs) {
    let m = new Map()
    let nodes = pldfs.map((pl)=>(exdict.getItemViaPathList0(ast,pl)))
    for(let i=0;i<pldfs.length;i++){
        m.set(pldfs[i],nodes[i])
    }
    return(m)
}

function getPlNodes(ast,pldfs) {
    let nodes = pldfs.map((pl)=>(exdict.getItemViaPathList0(ast,pl)))
    return(nodes)
}

function getPlVariableDeclarations(ast,pldfs) {
    let nodes = getPlNodes(ast,pldfs)
    let declarationsArray = []
    for(let i=0;i<nodes.length;i++) {
        let node = nodes[i]
        let declarations =[]
        if(node.type === "VariableDeclaration") {
            declarations = node.declarations
            declarations = declarations.map(
                (r) => (
                    {
                        name:r.id.name,
                        kind:node.kind,
                    }
                )
            )
        } else {
        }
        declarationsArray.push(declarations)
    }
    return(declarationsArray)
}

function getNearestAncestorPlViaPl(ast,type,pl) {
    let npl = JSON.parse(JSON.stringify(pl))
    while(npl.length>0){
        let node = exdict.getItemViaPathList0(ast,npl)
        if(node.type===type) {
            return(npl)
        } else {
            npl.pop(npl.length-1)
        }
    }
    return(npl)
}


const BLOCK_SCOPE_ATTRIBS = [
    "BlockStatement", 
    "ForStatement", 
    "ForInStatement", 
    "ForOfStatement", 
    "CatchClause", 
    "ComprehensionExpression"
]

const FUNCTION_SCOPE_ATTRIBS = [
    "FunctionDeclaration", 
    "FunctionExpression", 
    "ArrowFunctionExpression"
]

const GLOBAL_SCOPE_ATTRIBS = [
    "Program"
]


function getNearestFunctionScopeAncestorPlViaPl(ast,pl) {
    let npl = JSON.parse(JSON.stringify(pl))
    while(npl.length>0){
        let node = exdict.getItemViaPathList0(ast,npl)
        let type = node.type
        if(FUNCTION_SCOPE_ATTRIBS.includes(type)) {
            return(npl)
        } else {
            npl.pop(npl.length-1)
        }
    }
    return(npl)
}


function getNearestBlockScopeAncestorPlViaPl(ast,pl) {
    let npl = JSON.parse(JSON.stringify(pl))
    while(npl.length>0){
        let node = exdict.getItemViaPathList0(ast,npl)
        let type = node.type
        if(BLOCK_SCOPE_ATTRIBS.includes(type)) {
            return(npl)
        } else if(FUNCTION_SCOPE_ATTRIBS.includes(type)) {
            return(npl)
        } else {
            npl.pop(npl.length-1)
        }
    }
    return(npl)
}


function getBlockScopeAncestors(ast,pldfs) {
    let bsances = []
    for(let i =0;i<pldfs.length;i++){
        let bs = getNearestBlockScopeAncestorPlViaPl(ast,pldfs[i])
        bsances.push(bs)
    }
    return(bsances)
}


function getAnlScopes(ast,pldfs){
    let dfsnds = pldfs.map((pl)=>(exdict.getItemViaPathList0(ast,pl)))
    let types = dfsnds.map((node)=>(node.type))
    let declarationsArray = getPlVariableDeclarations(ast,pldfs)
    let bsances = getBlockScopeAncestors(ast,pldfs)
    let rslt = declarationsArray.map((r)=>([]))
    for(let i=0;i<declarationsArray.length;i++) {
        if(declarationsArray[i].length>0){
            let anl = bsances[i]
            let anlSeq = pldfs.findIndex((r)=>(JSON.stringify(r)===JSON.stringify(anl)))
            rslt[anlSeq] = rslt[anlSeq].concat(declarationsArray[i])
        } else {
        }
        
    }
    return(rslt)
}



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
    getPlNodeMap:getPlNodeMap,
    getPlNodes:getPlNodes,
    getPlVariableDeclarations:getPlVariableDeclarations,
    getNearestAncestorPlViaPl:getNearestAncestorPlViaPl,
    getNearestFunctionScopeAncestorPlViaPl:getNearestFunctionScopeAncestorPlViaPl,
    getNearestBlockScopeAncestorPlViaPl:getNearestBlockScopeAncestorPlViaPl,
    getBlockScopeAncestors:getBlockScopeAncestors,
    getAnlScopes:getAnlScopes,
}
