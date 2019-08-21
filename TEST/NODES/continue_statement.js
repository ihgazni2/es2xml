s = `for (var i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  text = text + i;
}`

d =ac.parse(s)

> d.body[0].body.body[0].consequent.body[0]
Node { type: 'ContinueStatement', start: 52, end: 61, label: null }

