/* tslint:disable:no-shadowed-variable */
/* tslint:disable:no-unused-variable */
import test = require('blue-tape');
import * as path from 'path';
import * as util from 'util';
import { Ansible, Options } from './index';


test('dockermachine-cli-js', t => {

  t.test('config2', t => {
    const options = new Options(
      /* currentWorkingDirectory */ path.join(__dirname, '..', 'test', 'ping'),
    );

    const ansible = new Ansible(options);

    return ansible.command('all -m ping --inventory-file ./inventory --connection local').then(function (data) {
      console.log('data = ', util.inspect(data, { depth: 10 }));
    });
  });


});
