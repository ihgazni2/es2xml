internal_methods = {
    function GetPrototypeOf():Object|null {},
    function SetPrototypeOf(o:Object|null):Boolean {},
    IsExtensible: Boolean,
    PreventExtensions: Boolean,
    GetOwnProperty,
    HasProperty,
    Get,
    Set,
    Delete,
    DefineOwnProperty,
    Enumerate,
    OwnPropertyKeys,
    Call,                  //Function 专有
    Construct,             //Function 专有
}

intrinsic_objects  {
    Array,
    ArrayBuffer,
    ArrayBuffer.prototype,
    Array.prototype,
    Array.prototype.values,
    Boolean,
    Boolean.prototype,
    DataView,
    DataViewPrototype, 	DataView.prototype
    Date,
    DatePrototype,    	Date.prototype
    decodeURI,
    decodeURIComponent,
    encodeURI,
    encodeURIComponent,
    Error,
    ErrorPrototype,
    eval,
    EvalError,
    EvalErrorPrototype,
    Float32Array,
    Float32ArrayPrototype,
    Float64Array,
    Float64ArrayPrototype,
    Function,
    FunctionPrototype,
    Generator,
    GeneratorFunction,
    GeneratorPrototype,
    Int8Array,                         Int8Array
    Int8ArrayPrototype,                Int8Array.prototype 
    Int16Array,                        Int16Array
    Int16ArrayPrototype
    Int32Array,
    Int32ArrayPrototype,
    isFinite,
    isNaN,
    IteratorPrototype,
    JSON,
    Map,
    MapIteratorPrototype,
    MapPrototype,
    Math,
    Number,
    NumberPrototype,
    Object,
    ObjectPrototype,
    ObjProto_toString,
    parseFloat,

}



%parseInt%	                    parseInt	
%Promise%	                    Promise	
%PromisePrototype%	            Promise.prototype
%Proxy%	                        Proxy	
%RangeError%	                RangeError
%RangeErrorPrototype%	        RangeError.prototype	
%ReferenceError%	            ReferenceError	
%ReferenceErrorPrototype%	    ReferenceError.prototype
%Reflect%	                    Reflect	
%RegExp%	                    RegExp	
%RegExpPrototype%	            RegExp.prototype
%Set%	                        Set


%SetIteratorPrototype%		
%SetPrototype%	                Set.prototype
%String%	                    String	
%StringIteratorPrototype%		
%StringPrototype%	            String.prototype	
%Symbol%	                    Symbol
%SymbolPrototype%	            Symbol.prototype
%SyntaxError%	                SyntaxError
%SyntaxErrorPrototype%	        SyntaxError.prototype
%ThrowTypeError%	
%TypedArray%		
%TypedArrayPrototype%		
%TypeError%	                    TypeError
%TypeErrorPrototype%	        TypeError.prototype
%Uint8Array%	                Uint8Array	
%Uint8ArrayPrototype%	        Uint8Array.prototype
%Uint8ClampedArray%	            Uint8ClampedArray
%Uint8ClampedArrayPrototype%	Uint8ClampedArray.prototype
%Uint16Array%	                Uint16Array
%Uint16ArrayPrototype%	        Uint16Array.prototype
%Uint32Array%	                Uint32Array
%Uint32ArrayPrototype%	        Uint32Array.prototype
%URIError%	                    URIError
%URIErrorPrototype%	            URIError.prototype
%WeakMap%	                    WeakMap
%WeakMapPrototype%	            WeakMap.prototype
%WeakSet%	                    WeakSet
%WeakSetPrototype%	            WeakSet.prototype




Get(O,P)
GetV(O,P)

Set(O,P,V,Throw)

CreatDataProperty(O,P,V)
CreateMethodProperty(O,P,V)
CreateDataPropertyOrThrow(O,P,V)
DefinePropertyOrThrow(O,P,desc)
DeletePropertyOrThrow(O,P)

GetMethod(O,P)


HasProperty(O,P)
HasOwnProperty(O,P)


Call(F,V,[argumentsList])
Construct(F,[argumentsList],[newTarget])

SetIntegrityLevel(O,level)
TestIntegrityLevel(O,level)

CreateArrayFromList(elements)
CreateListFromArrayLike(obj,[,elementTypes])


Invoke(O,P, [argumentsList])
OrdinaryHasInstance(C,O)
SpeciesConstructor(O,defaultConstructor)
EnumerableOwnNames(O)

GetFunctionRealm(obj)


GetIterator(obj,method)
IteratorNext(iterator,value)
IteratorComplete(iterResult)
IteratorValue(iterResult)
IteratorStep(iterator)
IteratorClose( iterator, completion )
CreateIterResultObject ( value, done )
CreateListIterator ( list )
ListIterator next( )










