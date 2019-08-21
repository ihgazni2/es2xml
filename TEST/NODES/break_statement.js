s =`while (i < 6) {
  if (i === 3) {
    break;
  }
  i = i + 1;
}`

d=ac.parse(s)

> d.body[0].body.body[0].consequent.body[0]
Node { type: 'BreakStatement', start: 37, end: 43, label: null }
>

