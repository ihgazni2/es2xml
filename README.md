# es2xml
>__convert AST generated by acorn to XML and flatten AST to matrix__

# Install

>__npm install es2xml__


## Usage
-------------------------------------------------------
### cmdline

 __1. select nodes__

        #global install
            npm install es2xml -g
        #command <input_js_file>, for example:
            function_declaration angular.min.js
        #will generate a js file begin with <input_js_file>__
            E2XLAB# ls -l | egrep angular.min.js__
            -rw-r--r-- 1 root root  264043 Jun  1 08:03 angular.min.js__undefined_undefined_undefined_undefined_undefined_undefined
            E2XLAB#
            E2XLAB# cat angular.min.js__undefined_undefined_undefined_undefined_undefined_undefined | egrep "^function"
            function N(a) {
            function ta(a) {
            function q(a, b, d) {
            function tc(a, b, d) {
            function uc(a) {
            function Yd() {
            function Pb(a, b, d) {
            ......
            
            E2XLAB#vim angular.min.js__undefined_undefined_undefined_undefined_undefined_undefined | egrep "^function"
            
            function N(a) {
                return function () {
                    var b = arguments[0], d;
                    d = '[' + (a ? a + ':' : '') + b + '] http://errors.angularjs.org/1.5.8/' + (a ? a + '/' : '') + b;
                    for (b = 1; b < arguments.length; b++) {
                        d = d + (1 == b ? '?' : '&') + 'p' + (b - 1) + '=';
                        var c = encodeURIComponent, e;
                        e = arguments[b];
                        e = 'function' == typeof e ? e.toString().replace(/ \{[\s\S]*$/, '') : 'undefined' == typeof e ? 'undefined' : 'string' != typeof e ? JSON.stringify(e) : e;
                        d += c(e);
                    }
                    return Error(d);
                };
            }
            ================================
            function ta(a) {
                if (null == a || Va(a))
                    return !1;
                if (L(a) || G(a) || F && a instanceof F)
                    return !0;
                var b = 'length' in Object(a) && a.length;
                return T(b) && (0 <= b && (b - 1 in a || a instanceof Array) || 'function' == typeof a.item);
            }
            ================================
            ......
          
        # supported commands     
        function_expression
        function_declaration
        arrow_function_expression
        member_expression
        expression_statement
        if_statement
        switch_statement
        switch_case
        with_statement
        block_statement
        break_statement
        continue_statement
        label_statement
        empty_statement
        debugger_statement
        return_statement
        throw_statement
        try_statement
        do_while_statement
        while_statement
        for_statement
        for_of_statement
        for_in_statement
        this_expression
        array_expression
        array_pattern
        object_expression
        object_pattern
        property
        unary_expression
        update_expression
        binary_expression
        assignment_expression
        logical_expression
        conditional_expression
        call_expression
        new_expression
        sequence_expression
        yield_expression
        await_expression
        variable_declaration
        variable_declarator
        catch_clause
        identifier
        literal
        regex_literal
        super
        spread_element
        template_literal
        template_element
        tagged_template_expression
        assignment_pattern
        rest_element
        class_declaration
        class_expression
        class_body
        method_definition
        meta_property
        import_declaration
        import_specifier
        import_default_specifier
        import_namespace_specifier
        export_specifier
        export_default_specifier
        export_name_declaration
        export_all_declaration

        
        # ls -l | egrep axios.min.js
        -rw-r--r-- 1 root root  12941 Feb 19  2018 axios.min.js

        e2x axios.min.js axios.min.xml "es-"

        # ls -l
        -rw-r--r-- 1 root root  12941 Feb 19  2018 axios.min.js
        -rw-r--r-- 1 root root 693231 Apr 30 23:56 axios.min.xml

        vim axios.min.xml
        
        <es-root>
          <es-body>
            <es-0 type="ExpressionStatement">
              <es-expression type="UnaryExpression" operator="%21" prefix="true">
                <es-argument type="CallExpression">
                  <es-callee type="FunctionExpression" expression="false" generator="false" async="false">
                    <es-params>
                      <es-0 type="Identifier" name="e">
                      </es-0>
                      <es-1 type="Identifier" name="t">
                      </es-1>
                    </es-params>
                    ......

        
 
 __2. beautify__
 
       #npm install es2xml -g
       #esbeau mozilla.tst.1.js
       # head beauty.mozilla.tst.1.js
       (function (global, factory) {
           if (typeof module === 'object' && typeof module.exports === 'object') {
               module.exports = global.document ? factory(global, true) : function (w) {
                   if (!w.document) {
                       throw new Error('jQuery requires a window with a document');
                   }
                   return factory(w);
               };
           } else {
                factory(global);
     
        


### code

        var e2x = require("es2xml")
        var acorn = require("acorn")
        var code = `function isNewLine(code, ecma2019String) {
          return code === 10 || code === 13 || !ecma2019String && (code === 0x2028 || code === 0x2029);
        }`
        var ast = acorn.parse(code)
        
__1. e2x.xml(ast)__  
        
        #tag-prefix = ""
        console.log(e2x.xml(ast,"")) 
__2. search the AST using css selector__

        var cheerio =require('cheerio')
        var code = e2x.xml(ast)
        var $ = cheerio.load(code,{xmlMode:true})
        $("[type=Identifier]").length
        $("[type=Identifier]")[0].attribs
        $("[type=Identifier]")[1].attribs
        $("[type=Identifier]")[2].attribs
        $("[type=BinaryExpression]")[0].attribs.operator
        //according to estree spec , some special-chars-not-allowed-in-html exist, so need escape/unescape
        unescape($("[type=BinaryExpression]")[0].attribs.operator)
        
__3. flatten and traverse the AST__

        //acorn-walk use sax-like-way to traverse the AST
        //and too many recursive functions in it, its hard to read
        //sometimes, its not convient for me to copy and resue the code
        //so i use a matrix to store it,make everything F-L-A-T and C-L-E-A-R
        //dfs is depth-first-search-path-record
        //wfs is width-first-search-path-record
        var mat = e2x.esmat(ast)
        var pldfs = e2x.pldfs(mat)
        var attrdfs = e2x.attrdfs(mat)
        var locdfs = e2x.locdfs(mat)
        var plwfs = e2x.plwfs(mat)
        var locwfs = e2x.locwfs(mat)


        
-------------------------------------------------------

## Doc 
-------------------------------------------------------

In Progressing...
        

        

-------------------------------------------------------


## STANDARDS

_(The ESTree Spec)_

---------------------------------------------------------------------------------------
[The ESTree Spec](https://github.com/estree/estree)  

---------------------------------------------------------------------------------------

## PACKAGE DEPENDANY

---------------------------------------------------------
[elist](https://www.npmjs.com/package/elist)

----------------------------------------------------------

## CODE REFERENCE
_(thanks to)_

------------------------------------------------------------------
[1. acorn-walk](https://github.com/acornjs/acorn/tree/master/acorn-walk)  

--------------------------------------------------------------------


----------------------------------------


## USEAGE SCREENSHOOTS

----------------------------------------------

        var e2x = require("es2xml")
        var acorn = require("acorn")
        var code = `function isNewLine(code, ecma2019String) {
          return code === 10 || code === 13 || !ecma2019String && (code === 0x2028 || code === 0x2029);
        }`
        var ast = acorn.parse(code)
       

![](/Images/e2x.xml.0.PNG)
![](/Images/e2x.xml.1.PNG)

        var cheerio =require('cheerio')
        var code = e2x.xml(ast)
        var $ = cheerio.load(code,{xmlMode:true})
        $("[type=Identifier]").length
        $("[type=Identifier]")[0].attribs
        $("[type=Identifier]")[1].attribs
        $("[type=Identifier]")[2].attribs
        $("[type=BinaryExpression]")[0].attribs.operator
        unescape($("[type=BinaryExpression]")[0].attribs.operator)
        
        
        
![](/Images/cheerio.0.png)  

        var mat = e2x.esmat(ast)
        var pldfs = e2x.pldfs(mat)

![](/Images/pldfs.0.png) 

        var attrdfs = e2x.attrdfs(mat)
        
![](/Images/attrdfs.0.png)

        var locdfs = e2x.locdfs(mat)
        
![](/Images/locdfs.0.png)

        var plwfs = e2x.plwfs(mat)

![](/Images/plwfs.0.png)

        var locwfs = e2x.locwfs(mat)        

![](/Images/locwfs.0.png)


----------------------------------------------


## TODO
-----------------------------------------------
__1.xml2es__<br>
__2.doc__<br>

-----------------------------------------------

