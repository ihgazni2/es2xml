s=`class Square extends Rectangle {
  constructor() {}
  static logDescription() {
    return super.logNbSides() + ' which are all equal';
  }
}`

> d.body[0].body.body[1].value.body.body[0].argument.left.callee.object
Node { type: 'Super', start: 91, end: 96 }
>



