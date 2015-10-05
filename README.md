# ansible-cli-js
A node.js wrapper for the [ansible](http://linux.die.net/man/1/ansible) command

[![NPM](https://nodei.co/npm/ansible-cli-js.png?downloads=true&downloadRank=true)](https://nodei.co/npm/ansible-cli-js/)
[![NPM](https://nodei.co/npm-dl/ansible-cli-js.png?months=6&height=3)](https://nodei.co/npm/ansible-cli-js/)

## Installation

### Step 1: Prerequisites

Ansible must be installed and accessible in the path

### Step 2: Installation
    
    npm install ansible-cli-js
    
Then:

```js
var AnsibleCli = require('ansible-cli-js');
```

## Usage

With promise

```js
var ansibleCli = new AnsibleCli({
  cwd: '~/ping'
});

ansibleCli.command('all -m ping  --inventory-file=./inventory --connection=local').then(function (data) {
  console.log('data = ', data); 
});

  //data = {
  //  command: 'ansible all -m ping --inventory-file=./inventory --connection=local ',
  //  raw: '["localhost | success >> {\\n    \\"changed\\": false, \\n    \\"ping\\": \\"pong\\"\\n}\\n\\n",""]'
  //}



```

With callback:

```js

ansibleCli.command('all -m ping ansible --inventory-file=./inventory --connection=local', function (err, data) {
  console.log('data = ', data);
});

//data = {
//  command: 'all -m ping ansible --inventory-file=./inventory --connection=local all',
//  raw: '["localhost | success >> {\\n    \\"changed\\": false, \\n    \\"ping\\": \\"pong\\"\\n}\\n\\n",""]'
//}

```


With options:

```js
ansibleCli.command('all -m ping', {
  'inventory-file': './inventory',
  'connection':'local'
}).then(function (data) {
  console.log('data = ', data);
});

//data = {
//  command: 'ansible all -m ping --inventory-file ./inventory --connection local ',
//  raw: '["localhost | success >> {\\n    \\"changed\\": false, \\n    \\"ping\\": \\"pong\\"\\n}\\n\\n",""]'
//}

```

