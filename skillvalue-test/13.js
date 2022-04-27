/**
 * How to execute terminal commands in node
 * 
 * forkProcess - doesn't exist at all
 * 
 * exec - spawns a shell and runs a command within that shell,
 *   passing the stdout and stderr to a callback function when complete.
 * 
 * execFile – except that it spawns the command directly without first spawning a shell by default.
 * 
 * spawn - spawns the child process asynchronously, without blocking the Node.js event loop
 * 
 * fork - spawns a new Node.js process and invokes a specified module with an IPC communication
 *   channel established that allows sending messages between parent and child.
 * 
 * 
 * The answer: spawn
 * 
 * Good explanation: https://stackabuse.com/executing-shell-commands-with-node-js/
 * 
 */


