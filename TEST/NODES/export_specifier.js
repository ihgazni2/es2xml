
d = ac.parse(`export {x} from 'mod'`,{sourceType:"module"})


> d.body[0].specifiers
[ Node {
    type: 'ExportSpecifier',
    start: 8,
    end: 9,
    local: Node { type: 'Identifier', start: 8, end: 9, name: 'x' },
    exported: Node { type: 'Identifier', start: 8, end: 9, name: 'x' } } ]
>
>

