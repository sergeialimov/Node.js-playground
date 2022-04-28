/**
 * What is the difference between fork and spawn methods
 * from child_process
 * 
 * 
 * The answer: A communication channel is established to the child
 *   when using fork
 * 
 * 
 * Comments: 
 * 
 * spawn - spawns the child process asynchronously,
 *   without blocking the Node.js event loop
 * 
 * fork - spawns a new Node.js process and invokes a specified module
 *   with an IPC communication channel established that allows
 *   sending messages between parent and child.
 */