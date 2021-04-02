
class _Undefined:
    def __repr__(self):
        return('undefined')

class _Null:
    def __repr__(self):
        return('null')


undefined = _Undefined();
null = _Null();


class _Boolean:
    def __call__(self,v):
        return(bool(v))


Boolean = _Boolean()


true = True
false = False









