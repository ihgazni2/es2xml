function getOwnTemplate(obj,func) {
    if(obj === undefined) {
        return([])
    } else if(obj === null) {
        return([])
    } else {
        return(func(obj))
    }
}

function getOwnPropertyNames(obj) {
    return(getOwnTemplate(obj,Object.getOwnPropertyNames))
}



const util = require("util")
const elel = require("elist")

function getItemViaPathList0(d,pl) {
    let rslt=d
    for(let i=0;i<pl.length;i++){
        let k = pl[i]
	rslt = rslt[k]
    }
    return(rslt)
}

function getItemViaPathList1(pl,d) {
    return(getItemViaPathList0(d,pl))
}

function getItemViaPathList(D) {
    let d =D.d
    let pl = D.pl
    return(getItemViaPathList0(d,pl))
}



function slctViaKeyList0(d,kl) {
    let nd = {}
    for(let i=0;i<kl.length;i++){
        let k = kl[i]
	    nd[k] = d[k]
    }
    return(nd)
}

function slctViaKeyList1(kl,d) {
    return(slctViaKeyList0(d,kl))
}

function slctViaKeyList(D) {
    let d = D.d
    let kl = D.kl
    return(slctViaKeyList0(d,kl))
}

function includesNonRecur0(d,k) {
    let ownProperties = getOwnPropertyNames(d)
    return(ownProperties.includes(k))
}

function includesNonRecur1(k,d) {
    return(includesNonRecur0(d,k))
}

function includesNonRecur(D) {
    let d = D.d
    let k = D.k
    return(includesNonRecur0(d,k))
}

function includesPathListInternal0(d,pl) {
   let rslt = d
   for(let i=0;i<pl.length;i++){
        let k = pl[i]
        if(includesNonRecur0(rslt,k)){
            
        } else {
            return([false,i])
        }
        rslt = rslt[k]
   }
   return([true,-1])
}

function includesPathListInternal1(pl,d) {
    return(includesPathListInternal0(d,pl))
}

function includesPathListInternal(D) {
    let d = D.d
    let pl = D.pl
    return(includesPathListInternal0(d,pl))
}


function includesPathList0(d,pl) {
    let arr = includesPathListInternal0(d,pl)
    let cond = arr[0]
    return(cond)
}

function includesPathList1(d,pl) {
    return(includesPathList0(d,pl))
}

function includesPathList(D) {
    let d = D.d
    let pl = D.pl
    return(includesPathList0(d,pl))
}


function setItemViaPathList0(d,pl,v) {
   let rslt = d
   for(let i=0;i<pl.length-1;i++){
        let k = pl[i]
	if(includesNonRecur0(rslt,k)){
	
	} else {
	    rslt[k] = {}
	}
	rslt = rslt[k]
   }
   let k = pl[pl.length-1]
   rslt[k] = v
   return(d)
}

function setItemViaPathList1(d,v,pl) {
    return(setItemViaPathList0(d,pl,v))
}
                                              
function setItemViaPathList2(pl,d,v) {
    return(setItemViaPathList0(d,pl,v))
}

function setItemViaPathList3(pl,v,d) {
    return(setItemViaPathList0(d,pl,v))
}

function setItemViaPathList4(v,d,pl) {
    return(setItemViaPathList0(d,pl,v))
}

function setItemViaPathList5(v,pl,d) {
    return(setItemViaPathList0(d,pl,v))
}

function setItemViaPathList(D) {
    let d = D.d
    let pl = D.pl
    let v = D.v
    return(setItemViaPathList0(d,pl,v))
}



function slctViaPathListArray0(d,pla) {
    let nd = {}
    for(let i=0;i<pla.length;i++){
        let pl = pla[i]
	let v = getItemViaPathList0(d,pl)
	nd = setItemViaPathList0(nd,pl,v)
    }
    return(nd)
}

function slctViaPathListArray1(pla,d) {
    return(slctViaPathListArray0(d,pla))
}

function slctViaPathListArray(D) {
    let d = D.d
    let pla = D.pla
    return(slctViaPathListArray0(d,pla))
}

function updateOnlyExistInOwn(d1,d2) {
    for(let k in d1) {
       let cond = includesNonRecur0(d2,k) 
       if(cond) {
           d1[k] = d2[k]
       } else {
       }
    }
    return(d1)
}

function updateOnlyNonExistInOwn(d1,d2) {
    for(let k in d2) {
       let cond = includesNonRecur0(d1,k)
       if(cond) {
           
       } else {
           d1[k] = d2[k]
       }
    }
    return(d1)
}

function update(d1,d2) {
    for(let k in d2) {
        d1[k] = d2[k]
    }
    return(d1)
}


//
const flatten = (function (isArray, wrapped) {
    return function (table) {
        return reduce("", {}, table);
    };

    function reduce(path, accumulator, table) {
        if (isArray(table)) {
            var length = table.length;

            if (length) {
                var index = 0;

                while (index < length) {
                    var property = path + "[" + index + "]", item = table[index++];
                    if (wrapped(item) !== item) accumulator[property] = item;
                    else reduce(property, accumulator, item);
                }
            } else accumulator[path] = table;
        } else {
            var empty = true;

            if (path) {
                for (var property in table) {
                    var item = table[property], property = path + "." + property, empty = false;
                    if (wrapped(item) !== item) accumulator[property] = item;
                    else reduce(property, accumulator, item);
                }
            } else {
                for (var property in table) {
                    var item = table[property], empty = false;
                    if (wrapped(item) !== item) accumulator[property] = item;
                    else reduce(property, accumulator, item);
                }
            }

            if (empty) accumulator[path] = table;
        }

        return accumulator;
    }
}(Array.isArray, Object));



function unflatten(table) {
    var result = {};

    for (var path in table) {
        var cursor = result, length = path.length, property = "", index = 0;

        while (index < length) {
            var char = path.charAt(index);

            if (char === "[") {
                var start = index + 1,
                    end = path.indexOf("]", start),
                    cursor = cursor[property] = cursor[property] || [],
                    property = path.slice(start, end),
                    index = end + 1;
            } else {
                var cursor = cursor[property] = cursor[property] || {},
                    start = char === "." ? index + 1 : index,
                    bracket = path.indexOf("[", start),
                    dot = path.indexOf(".", start);

                if (bracket < 0 && dot < 0) var end = index = length;
                else if (bracket < 0) var end = index = dot;
                else if (dot < 0) var end = index = bracket;
                else var end = index = bracket < dot ? bracket : dot;

                var property = path.slice(start, end);
            }
        }

        cursor[property] = table[path];
    }

    return result[""];
}
//

function dictLength(d) {
    return(Object.keys(d).length)
}


Object.defineProperty(Object.prototype, "len", {
	value:  function () {
        return(Object.keys(this).length)
    },
	writable: true,
	enumerable: false,
	configurable: true
});


Object.defineProperty(Object.prototype, "seq", {
    value: function (seq) {
        let ks = Object.keys(this)
        let k = ks[seq]
        return(this[k])
    },
    writable: true,
    enumerable: false,
    configurable: true
});

//
Object.defineProperty(Object.prototype, "kl", {
    value: function(sortBy) {
        let ks = Object.keys(this)
        ks.sort(sortBy);
        return(ks)
    },
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(Object.prototype, "vl", {
    value: function(sortBy) {
        let vs = Object.values(this)
        vs.sort(sortBy);
        return(vs)
    },
    writable: true,
    enumerable: false,
    configurable: true
});


Object.defineProperty(Object.prototype, "mapk2l", {
    value: function(mapFunc) {
        let ks = Object.values(this)
        ks = ks.map(mapFunc)
        return(vs)
    },
    writable: true,
    enumerable: false,
    configurable: true
})


Object.defineProperty(Object.prototype, "mapv2l", {
    value: function(mapFunc) {
        let vs = Object.values(this)
        vs = vs.map(mapFunc)
        return(vs)
    },
    writable: true,
    enumerable: false,
    configurable: true
})


//
function dfltLt(v1,v2) {
    return((v1<v2))
}

function dfltEq(v1,v2) {
    return((v1===v2))
}


function dfltGt(v1,v2) {
    return((v1>v2))
}


function dfltCmp(v1,v2) {
    if(dfltLt(v1,v2)){
        return(-1)
    } else if(dfltEq(v1,v2)) {
        return(0)
    } else {
        return(1)
    }
}


function cmpDict(d1,d2,cmpKeys,cmpFuncs) {
    for(let i=0;i<cmpKeys.length;i++) {
        let key = cmpKeys[i]
        let func = cmpFuncs[i]
        let cond = func(d1[key],d2[key])
        if(cond === 0) {

        } else {
            return(cond)
        }
    }
    return(0)
}




function sortDtable(dtb,cmpKeys,cmpFuncs,reverse) {
    let lngth = cmpKeys.length
    if(cmpFuncs === undefined){
        cmpFuncs = Array(lngth).fill(dfltCmp)
    } else {
    }
    if(reverse === undefined){
        reverse = true
    } else {
    }
    function cmp(d1,d2) {
        let rslt = cmpDict(d1,d2,cmpKeys,cmpFuncs)
        if(reverse){
            return(rslt)
        } else {
            console.log("here")
            return(-rslt)
        }
    }
    dtb.sort(cmp)
    return(dtb)
}

////
function regexize(obj) {
    if(util.isRegExp(obj)) {
        return(obj)
    } else {
        return(new RegExp(obj))
    }
}

function srchk(d,regex){
    regex = regexize(regex)
    let [kl,vl] = elel.d2kvlist(d)
    kl = kl.filter((r)=>(regex.test(r)))
    return(slctViaKeyList0(d,kl))
}

function srchv(d,regex){
    regex = regexize(regex)
    let [kl,vl] = elel.d2kvlist(d)
    let seqs = elel.slctiV(vl,(r)=>(regex.test(r)===true))
    kl = elel.seqs(seqs)
    return(slctViaKeyList0(d,kl))
}


function srch(d,regex) {
    regex = regexize(regex)
    let [kl,vl] = elel.d2kvlist(d)
    let seqsk = elel.slctiV(kl,(r)=>(regex.test(r)===true))
    let seqsv = elel.slctiV(vl,(r)=>(regex.test(r)===true))
    let seqs = seqsk.concat(seqsv)
    seqs = seqs.uniqualize()
    kl = kl.seqs(seqs)
    return(slctViaKeyList0(d,kl))
}

////

module.exports = {
    getItemViaPathList0:getItemViaPathList0,
    getItemViaPathList1:getItemViaPathList1,
    getItemViaPathList:getItemViaPathList,
    slctViaKeyList0:slctViaKeyList0,
    slctViaKeyList1:slctViaKeyList1,
    slctViaKeyList:slctViaKeyList,
    includesNonRecur0:includesNonRecur0,
    includesNonRecur1:includesNonRecur1,
    includesNonRecur:includesNonRecur,
    includesPathListInternal0:includesPathListInternal0,
    includesPathListInternal1:includesPathListInternal1,
    includesPathListInternal:includesPathListInternal,
    includesPathList0:includesPathList0,
    includesPathList1:includesPathList1,
    includesPathList:includesPathList,
    setItemViaPathList0:setItemViaPathList0,
    setItemViaPathList1:setItemViaPathList1,
    setItemViaPathList2:setItemViaPathList2,
    setItemViaPathList3:setItemViaPathList3,
    setItemViaPathList4:setItemViaPathList4,
    setItemViaPathList5:setItemViaPathList5,
    setItemViaPathList:setItemViaPathList,
    slctViaPathListArray0:slctViaPathListArray0,
    slctViaPathListArray1:slctViaPathListArray1,
    slctViaPathListArray:slctViaPathListArray,
    updateOnlyExistInOwn:updateOnlyExistInOwn,
    updateOnlyNonExistInOwn:updateOnlyNonExistInOwn,
    update:update,
    flatten:flatten,
    unflatten:unflatten,
    dictLength:dictLength,
    sortDtable:sortDtable,
    srch:srch,
    srchk:srchk,
    srchv:srchv
}

