# ansible-cli-js
A node.js wrapper for the [ansible](http://linux.die.net/man/1/ansible) command

[![NPM](https://nodei.co/npm/ansible-cli-js.png?downloads=true&downloadRank=true)](https://nodei.co/npm/ansible-cli-js/)
[![NPM](https://nodei.co/npm-dl/ansible-cli-js.png?months=6&height=3)](https://nodei.co/npm/ansible-cli-js/)

## Installation

### Step 1: Prerequisites

The aws command line interface must be installed and accessible in the path

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
});

ansibleCli.command('iam list-users').then(function (data) {
  console.log('data = ', data); 
});

//data = {


```

With callback:

```js

ansibleCli.command('??', function (err, data) {
  console.log('data = ', data);
});

//data = {


```

* ??

```js
ansibleCli.command('??').then(function (data) {
  console.log('data = ', data); 
});


//data =  { command: 'aws ec2 describe-instances --instance-ids i-789b3ba7 ',


```
or with options

```js
ansibleCli.command('ec2 describe-instances', { 'instance-ids': 'i-789b3ba7' }).then(function (data) {
  console.log('data = ', data); 
});

```


