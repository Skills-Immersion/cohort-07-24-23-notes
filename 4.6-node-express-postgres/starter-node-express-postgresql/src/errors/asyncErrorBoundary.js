function asyncErrorBoundary(delegate, defaultStatus) { 
    return (request, response, next) => {  
        Promise.resolve()
            .then(() => delegate(request, response, next))
            .catch((error = {}) => {
                const { status = defaultStatus, message = error } = error;
                next({
                    status,
                    message,
                });
            });
    };
}


// returns a middleware function
//      kicks of a promise chain (we want the catch)

// function asyncErrorBoundary(delegate, defaultStatus) {
//     return (request, response, next) => {
//         (async () => {
//             try {
//                 await delegate(req, res, next)
//             } catch (error) {
//                 const { status = defaultStatus, message = error } = error;
//                 next({
//                     status,
//                     message,
//                 });
//             }
//         })();
//     }
// }


// function asyncErrorBoundary(delegate, defaultStatus) { 
//     Promise.resolve()
//     return (request, response, next) => {  
//             .then(() => delegate(request, response, next))
//             .catch((error = {}) => {
//                 const { status = defaultStatus, message = error } = error;
//                 next({
//                     status,
//                     message,
//                 });
//             });
//     };
// }

// function asyncErrorBoundary(delegate, defaultStatus) {
//     return async (request, response, next) => {
//         try {
//             await delegate(request, response, next)
//         }
//         catch {
//             const { status = defaultStatus, message = error } = error;
//             next({
//                 status,
//                 message,
//             });
//         }
//     };
// }

module.exports = asyncErrorBoundary;



