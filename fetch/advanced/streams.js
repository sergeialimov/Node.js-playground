/**
 * The "Node.js way" is to use streams when possible. You can pipe res.body to another stream.
 * This example uses stream.pipeline to attach stream error handlers and
 * wait for the download to complete.
 */

import { createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream';
import { promisify } from 'node:util';

const streamPipeline = promisify(pipeline);

const response = await fetch('https://github.githubassets.com/images/modules/logos_page/Octocat.png');

if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);

await streamPipeline(response.body, createWriteStream('./octocat.png'));
