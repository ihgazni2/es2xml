const escodegen = require('escodegen')

function dcp(obj) {
    return(JSON.parse(JSON.stringify(obj)))
}

function eq(obj0,obj1) {
    let cond = (JSON.stringify(obj0) === JSON.stringify(obj1))
    return(cond)
}

function array_lst(arr,n) {
    let lngth = arr.length
    n = (n === undefined)? 1 : n
    let index = lngth - n
    return(arr[index])
}

function array_getitem(arr,n) {
    let lngth = arr.length
    if(n>=0 && n<lngth) {
        return(arr[n])
    } else if(n<0) {
        n = -n
        if(n<lngth) {
            return(arr[n])
        } else {
        }
    } else {

    }
}

function array_slct_seqs(arr,seqs) {
    arr = arr.filter((r,i)=>seqs.includes(i))
    return(arr)
}

function array_slct_seqs_inplace(arr,seqs) {
    let narr =[]
    for(let i=0;i<arr.length;i++){
        if(seqs.includes(i)) {
            narr.push(arr[i])
        }
    }
    return(narr)
}


function dict_get_values_by_kl(d,kl) {
    let vals = []
    for(let k of kl) {
        vals.push(kl[k])
    }
    return(vals)
}



//

function ele2node(ele,ast) {
    return(get_node_via_rpl(ast,ele.rpl))
}

//
function list_all_types(mat) {
    let arr = Array.prototype.concat(...mat)
    arr = arr.map(r=>r.type)
    let st = new Set(arr) 
    return(Array.from(st))
}


function get_eles_by_type(mat,type) {
    let rslt = []
    for(let i=0;i<mat.length;i++) {
        let layer = mat[i]
        for(let j =0;j<layer.length;j++) {
            let ele = layer[j]
            if(ele.type === type){
                rslt.push(ele)
            } else {
            }
        }
    }
    return(rslt)
}

function get_eles_by_cond_func(cond,mat,ast) {
    let rslt = []
    for(let i=0;i<mat.length;i++) {
        let layer = mat[i]
        for(let j =0;j<layer.length;j++) {
            let ele = layer[j]
            if(cond(ele,mat,ast)){
                rslt.push(ele)
            } else {
            }
        }
    }
    return(rslt)
}


function creat_rpl2loc_mapping(mat) {
    let md = {}
    for(let i=0;i<mat.length;i++) {
        let layer = mat[i]
        for(let j =0;j<layer.length;j++) {
            let rpl = layer[j].rpl.toString()
            let loc = [i,j].toString()
            md[rpl] = loc
            md[loc] = rpl
        }
    }
    return(md)
}


function rpl2loc(md,rpl) {
    rpl = rpl.toString()
    let loc = md[rpl]
    loc = loc.split(",").map((r)=>parseInt(r))
    return(loc)
}

function get_node_via_rpl(root,rpl) {
    let next = root
    for(let i in rpl) {
        next = next[rpl[i]]
    }
    return(next)
}

function ele2code(ele,ast) {
    let rpl = ele.rpl
    let nd = get_node_via_rpl(ast,rpl)
    console.log(escodegen.generate(nd))
}

function nd2code(nd) {
    console.log(escodegen.generate(nd))
}

//
function get_parent(ele,mat) {
    let pbreadth = ele.pbreadth
    let pdepth = ele.depth - 1
    return(mat[pdepth][pbreadth])
}

function get_parent(ele,mat) {
    let pbreadth = ele.pbreadth
    let pdepth = ele.depth - 1
    return(mat[pdepth][pbreadth])
}

function get_loc(ele) {
    return([ele.depth,ele.breadth])
}

function get_ance(which,ele,mat) {
    c = 0
    let parent = ele
    while(c<which) {
        parent = get_parent(ele,mat)
        c = c + 1
    }
    return(parent)
}

function get_ance_code(which,ele,mat,ast) {
    let ance = get_ance(which,ele,mat)
    return(ele2code(ance,ast))
}

//
//
function to_str(obj) {
    if(obj === undefined) {
        return('undefined')
    } else if(obj === null) {
        return('null')
    } else {
        return(obj.toString())
    }
}



function cols2tbl(cols,columns) {
    let rows = []
    let widths = []
    for(let i=0;i<columns.length;i++) {
        let col = cols[i]
        let ws = col.map(ele=>to_str(ele).length)
        ws.unshift(columns[i].length)
        widths.push(Math.max(...ws))
    }
    let tbl = {}
    tbl.widths = widths
    tbl.columns = columns
    tbl.cols = cols
    return(tbl)
}


function padding_str(s,width,pad) {
    let lngth = s.length
    if(lngth<width) {
        s = s + pad.repeat(width-lngth)
        return(s)
    } else {
        return(s.substr(0,width))
    }
}

function fmt_shcol(col,width) {
    col = col.map(ele=>padding_str(to_str(ele),width,' '))
    return(col)
}


function cols2rows(cols) {
    let rows = []
    for(let j=0;j<cols[0].length;j++) {
        let row = []
        for(let i=0;i<cols.length;i++) {
            row.push(cols[i][j])
        }
        rows.push(row)
    }
    return(rows)
}

function fmt_shtbl(tbl) {
    tbl = dcp(tbl)
    let widths = tbl.widths
    for(let i =0;i<widths.length;i++) {
        let col = tbl.cols[i]
        let width = tbl.widths[i]
        tbl.cols[i] = fmt_shcol(col,width)
        tbl.columns[i] = padding_str(tbl.columns[i],width,' ')
    }
    return(tbl)
}

function sh_tbl(tbl,seqs,si,ei) {
    tbl = fmt_shtbl(tbl)
    let columns = tbl.columns
    let rows = cols2rows(tbl.cols)
    rows.unshift(columns)
    si = (si === undefined)? 0:si
    ei = (ei === undefined)? rows.length:ei
    for(let i =si;i<ei;i++) {
        let row = rows[i]
        row = array_slct_seqs(row,seqs)
        console.log(row.join(' | '))
    }
}


////


/////

function get_literals(mat) {
    return(get_eles_by_type(mat,'Literal'))
}


function get_lit_value(ele) {
    return(ele.attribs.value)
}


function get_lit_tbl(mat) {
    let lits = get_literals(mat)
    let vals = lits.map(ele=>get_lit_value(ele,mat))
    let locs = lits.map(ele=>get_loc(ele))
    let cols = [vals,locs]
    let columns = ['value','loc']
    let tbl = cols2tbl(cols,columns)
    return(tbl)
}

/////
function get_identifiers(mat) {
    return(get_eles_by_type(mat,'Identifier'))
}

function get_id_name(ele) {
    return(ele.attribs.name)
}

function get_id_tbl(mat) {
    let ids = get_identifiers(mat)
    let names = ids.map(ele=>get_id_name(ele,mat))
    let locs = ids.map(ele=>get_loc(ele))
    let types = ids.map(ele=>null)
    let cols = [names,types,locs]
    let columns = ['name','type','loc']
    let tbl = cols2tbl(cols,columns)
    return(tbl)
}


function var_tbl_fill_id_tbl(var_tbl,id_tbl) {
    let var_id_locs = var_tbl.cols[2]
    let var_kinds = var_tbl.cols[1]
    let types = var_kinds.map(r=>'var.'+r)
    let id_locs = id_tbl.cols[2]
    let id_types = id_tbl.cols[1]
    for(let i=0;i<var_id_locs.length;i++) {
        let var_id_loc = var_id_locs[i]
        let type = types[i]
        for(let j=0;j<id_locs.length;j++) {
            let id_loc = id_locs[j]
            let cond = eq(var_id_loc,id_loc) 
            if(cond) {
                id_types[j] = type
            } else {
            }
        }
    }
    id_tbl = cols2tbl(id_tbl.cols,id_tbl.columns)
    return(id_tbl)
}



//////variable_declaration variable_declarator
function get_var_kind(ele,mat) {
    let parent = get_parent(ele,mat)
    let kind = parent.attribs.kind
    return(kind)
}

function get_variables(mat) {
    return(get_eles_by_type(mat,'VariableDeclarator'))
}



function get_var_id(ele,mat) {
    let locs = ele.childlocs
    let children = locs.map(r=>mat[r[0]][r[1]])
    children = children.filter(child=>array_lst(child.rpl) === 'id')
    let name = children[0].attribs.name
    return(name)
}

function get_var_id_loc(ele,mat) {
    let locs = ele.childlocs
    let children = locs.map(r=>mat[r[0]][r[1]])
    children = children.filter(child=>array_lst(child.rpl) === 'id')
    let loc = get_loc(children[0])
    return(loc)
}


function get_var_init(ele,mat) {
    let locs = ele.childlocs
    let children = locs.map(r=>mat[r[0]][r[1]])
    children = children.filter(child=>array_lst(child.rpl) === 'init')
    //let loc = [children[0].depth,children[0].breadth]
    if(children.length > 0) {
        return(children[0])
    } else {
        return(undefined)
    }
}

function get_var_init_loc(ele,mat) {
    let init = get_var_init(ele,mat)
    if(init === undefined) {
        return([-1,-1])
    } else {
        return([init.depth,init.breadth])
    }
}


function get_var_tbl(mat) {
    let vars = get_variables(mat)
    let kinds = vars.map(ele=>get_var_kind(ele,mat))
    let names = vars.map(ele=>get_var_id(ele,mat))
    let ids = vars.map(ele=>get_var_id_loc(ele,mat))
    let inits = vars.map(ele=>get_var_init_loc(ele,mat))
    let locs = vars.map(ele=>get_loc(ele))
    let cols = [names,kinds,ids,inits,locs]
    let columns = ['name','kind','id','init','loc']
    let tbl = cols2tbl(cols,columns)
    return(tbl)
}

////////
//
//
function get_funcs(mat) {
    return(
        get_eles_by_cond_func(
            ele=>(
                ele.attribs.type === 'ArrowFunctionExpression' ||
                ele.attribs.type === 'FunctionExpression' ||
                ele.attribs.type === 'FunctionDeclaration'
            ),
            mat
        )
    )
}

const func_type_map = {
    'FunctionExpression':'expression',
    'FunctionDeclaration':'declaration',
    'ArrowFunctionExpression':'arrow'
}


function get_func_desc(ele) {
    let d = {}
    d.type = func_type_map[ele.attribs.type]
    d.expression = ele.attribs.expression
    d.generator = ele.attribs.generator
    d.async = ele.attribs.async
    d.params =  ele.childlocs.filter(loc=>array_lst(mat[loc[0]][loc[1]].rpl,2)==='params')
    d.body =  ele.childlocs.filter(loc=>array_lst(mat[loc[0]][loc[1]].rpl,1)==='body')[0]
    d.id =  ele.childlocs.filter(loc=>array_lst(mat[loc[0]][loc[1]].rpl,1)==='id')
    if(d.id.length === 0) {
        d.id = [-1,-1]
        d.name = null
    } else {
        d.id = d.id[0]
        d.name = mat[d.id[0]][d.id[1]].attribs.name
    }
    return(d)
}


function get_func_tbl(mat) {
    let eles =  get_funcs(mat)
    let descs = eles.map(ele=>get_func_desc(ele))
    let names = descs.map(d=>d.name)
    let types = descs.map(d=>d.type)
    let ids = descs.map(d=>d.id)
    let params = descs.map(d=>d.params)
    let bodys = descs.map(d=>d.body)
    let expressions = descs.map(d=>d.expression)
    let asyncs = descs.map(d=>d.async)
    let generators = descs.map(d=>d.generator)
    let locs = eles.map(ele=>get_loc(ele))
    let cols = [names,types,ids,params,bodys,expressions,asyncs,generators,locs]
    let columns = ['name','type','id','params','body','expression','async','generator','loc']
    let tbl = cols2tbl(cols,columns)
    return(tbl)
}



function func_tbl_fill_id_tbl(func_tbl,id_tbl) {
    let func_id_locs = func_tbl.cols[2]
    let func_types = func_tbl.cols[1]
    let types = func_types
    let id_locs = id_tbl.cols[2]
    let id_types = id_tbl.cols[1]
    for(let i=0;i<func_id_locs.length;i++) {
        let func_id_loc = func_id_locs[i]
        let type = types[i]
        for(let j=0;j<id_locs.length;j++) {
            let id_loc = id_locs[j]
            let cond = eq(func_id_loc,id_loc)
            if(cond) {
                id_types[j] = type
            } else {
            }
        }
    }
    id_tbl = cols2tbl(id_tbl.cols,id_tbl.columns)
    return(id_tbl)
}


function some_tbl_fill_id_tbl(some_tbl,id_tbl,map_func) {
    let some_id_locs = some_tbl.cols[2]
    let some_types = some_tbl.cols[1]
    let types = some_types.map(r=>map_func(r))
    let id_locs = id_tbl.cols[2]
    let id_types = id_tbl.cols[1]
    for(let i=0;i<some_id_locs.length;i++) {
        let some_id_loc = some_id_locs[i]
        let type = types[i]
        for(let j=0;j<id_locs.length;j++) {
            let id_loc = id_locs[j]
            let cond = eq(some_id_loc,id_loc)
            if(cond) {
                id_types[j] = type
            } else {
            }
        }
    }
    id_tbl = cols2tbl(id_tbl.cols,id_tbl.columns)
    return(id_tbl)
}


////////////////////
//
module.exports = {
    array_lst,
    array_getitem,
    array_slct_seqs,
    array_slct_seqs_inplace,
    dict_get_values_by_kl,
    dcp,
    eq,
    padding_str,
    ////
    cols2tbl,
    fmt_shcol,
    fmt_shtbl,
    cols2rows,
    sh_tbl,
    ////
    ele2node,
    list_all_types,
    get_eles_by_type,
    get_eles_by_cond_func,
    creat_rpl2loc_mapping,
    rpl2loc,
    get_node_via_rpl,
    ele2code,
    nd2code,
    get_parent,
    get_loc,
    get_ance,
    get_ance_code,
    ///var
    get_var_kind,
    get_variables,
    get_var_id,
    get_var_id_loc,
    get_var_init,
    get_var_init_loc,
    get_var_tbl,
    //
    get_literals,
    get_lit_tbl,
    //
    get_identifiers,
    get_id_tbl,
    //
    var_tbl_fill_id_tbl,
    //
    func_type_map,
    get_func_desc,
    get_funcs,
    get_func_tbl,
    func_tbl_fill_id_tbl,
}

//
// lit   literal          string number true false null regex
// var   variable         let const var
//       variable         variable_declarator variable_definition

//func   function_declaration
//       function_expression
//       arrow_function_expression
//

// id    identifier       

//
//var_tbl = get_var_tbl(mat)
//sh_tbl(var_tbl)
//var scm = escope.analyze(ast)
//
//

