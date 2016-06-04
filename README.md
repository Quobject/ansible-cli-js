# ansible-cli-js
A node.js wrapper for the [ansible](http://linux.die.net/man/1/ansible) command

[![NPM](https://nodei.co/npm/ansible-cli-js.png?downloads=true&downloadRank=true)](https://nodei.co/npm/ansible-cli-js/)
[![NPM](https://nodei.co/npm-dl/ansible-cli-js.png?months=6&height=3)](https://nodei.co/npm/ansible-cli-js/)

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]

## Installation

### Step 1: Prerequisites

[Ansible](http://www.ansible.com/) must be installed and accessible in the path

### Step 2: Installation
    
    npm install ansible-cli-js
    
Then:

```js
var ansibleCli = require('ansible-cli-js');

```

## Usage

With promise:

```js
var Options = ansibleCli.Options;
var Ansible = ansibleCli.Ansible;

var options = new Options(
    /* currentWorkingDirectory */ 'ping'
);

var ansible = new Ansible(options);

ansible.command('all -m ping  --inventory-file=./inventory --connection=local').then(function (data) {
  console.log('data = ', data); 
});

//data = {
//  command: 'ansible all -m ping --inventory-file=./inventory --connection=local ',
//  raw: '["localhost | success >> {\\n    \\"changed\\": false, \\n    \\"ping\\": \\"pong\\"\\n}\\n\\n",""]'
//}
```

With callback:

```js

ansible.command('ansible all -m ping --inventory-file=./inventory --connection=local', function (err, data) {
  console.log('data = ', data);
});

```


Typescript:

```js
import { Ansible, Options } from 'ansible-cli-js';

const options = new Options(
  /* currentWorkingDirectory */ 'ping'
);

const ansible = new Ansible(options);

ansible.command('all -m ping --inventory-file ./inventory --connection local').then(function (data) {
  console.log('data = ', util.inspect(data, { depth: 10 }));
});

```

## License

MIT

[npm-image]: https://img.shields.io/npm/v/ansible-cli-js.svg?style=flat
[npm-url]: https://npmjs.org/package/ansible-cli-js
[downloads-image]: https://img.shields.io/npm/dm/ansible-cli-js.svg?style=flat
[downloads-url]: https://npmjs.org/package/ansible-cli-js
