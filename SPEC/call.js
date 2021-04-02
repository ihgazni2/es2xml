/*
                   this_argument
                   arguments_list
class              ExcecutionContext
                   running_excecution_context
                   caller_context 
function           is_suspended
function           suspend
                   callee_context 
function           initialize
array              excecution_context_stack
function           evaluate
*/

function call(
    excecution_context_stack,
    running_excecution_context
    func_object,
    this_argument,
    arguments_list
) {
    let caller_context = running_excecution_context;
    let cond = is_suspended(caller_context);
    if(cond) {
    } else {
        suspend(caller_context);
    }
    let callee_context = new ExcecutionContext();
    callee_context.func = func_object;
    let callee_realm = func_object.realm;
    callee_context.realm = callee_realm;
    initialize(callee_context);
    excecution_context_stack.push(callee_context);
    let new_target = undefined;
    let rslt = evaluating(func_object,this_argument,arguments_list);
    excecution_context_stack.pop();
    running_excecution_context = caller_context;
    return(rslt)
}




construct(arguments_list,new_target);
create_builtin_function(realm,steps,prototype,internal_slots_list);





bound_target_function           
bound_this
bound_arguments

target
bound_this
bound_args


BoundFunctionCreate (targetFunction, boundThis, boundArgs)



