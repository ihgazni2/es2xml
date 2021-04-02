


GetThisBinding()
HasVarDeclaration (N)
    VariableDeclaration
    FunctionDeclaration
    GeneratorDeclaration


HasLexicalDeclaration (N)
    LexicalDeclaration
    ClassDeclaration


HasRestrictedGlobalProperty (N)

CanDeclareGlobalVar (N)    
CanDeclareGlobalFunction (N)
CreateGlobalVarBinding(N, D)
    The binding will be a mutable binding. The corresponding global object property will have attribute values appropriate for a var.


CreateGlobalFunctionBinding(N, V, D)
    The corresponding global object property will have attribute values appropriate for a function. 



