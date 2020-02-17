> la = require("./a.js").level_opts
[
  { checked: false, bgclr: 'green', ch: '优秀' },
  { checked: false, bgclr: '#1296db', ch: '较好' },
  { checked: false, bgclr: 'yellow', ch: '合格' },
  { checked: false, bgclr: 'orange', ch: '较差' },
  { checked: false, bgclr: 'red', ch: '不合格' }
]
> lb = require("./b.js").level_opts
[
  { checked: false, bgclr: 'green', ch: '优秀' },
  { checked: false, bgclr: '#1296db', ch: '较好' },
  { checked: false, bgclr: 'yellow', ch: '合格' },
  { checked: false, bgclr: 'orange', ch: '较差' },
  { checked: false, bgclr: 'red', ch: '不合格' }
]
> la[0].checked
false
> la[0].checked = true
true
>
> la
[
  { checked: true, bgclr: 'green', ch: '优秀' },
  { checked: false, bgclr: '#1296db', ch: '较好' },
  { checked: false, bgclr: 'yellow', ch: '合格' },
  { checked: false, bgclr: 'orange', ch: '较差' },
  { checked: false, bgclr: 'red', ch: '不合格' }
]
> lb
[
  { checked: true, bgclr: 'green', ch: '优秀' },
  { checked: false, bgclr: '#1296db', ch: '较好' },
  { checked: false, bgclr: 'yellow', ch: '合格' },
  { checked: false, bgclr: 'orange', ch: '较差' },
  { checked: false, bgclr: 'red', ch: '不合格' }
]
>
