import * as Promise from 'bluebird';
import * as child_process from 'child_process';
const exec = child_process.exec;

export class Ansible {

  constructor(private options: IOptions = {
    currentWorkingDirectory: null,
  }) { }

  public command(command: string, callback?: (err, data) => void) {
    let ansible = this;
    let execCommand = 'ansible ' + command;

    return Promise.resolve().then(function () {

      console.log('execCommand =', execCommand);

      let execOptions = {
        cwd: ansible.options.currentWorkingDirectory,
        env: {
          DEBUG: '',
          HOME: process.env.HOME,
          PATH: process.env.PATH,
        },
        maxBuffer: 200 * 1024 * 1024,
      };

      console.log('exec options =', execOptions);

      return new Promise(function (resolve, reject) {
        exec(execCommand, execOptions, (error, stdout, stderr) => {
          if (error) {
            console.error(`exec error: ${error}`);
            reject(error);
          }
          console.log(`stdout: ${stdout}`);
          resolve({ stdout: stdout });
        });
      });
    }).then(function (data: { stdout: string }) {

      let result = {
        command: execCommand,
        raw: data.stdout,
      };
      return result;

    }).nodeify(callback);
  }
}


export interface IOptions {
  currentWorkingDirectory?: string;
}

export class Options implements IOptions {
  public constructor(public currentWorkingDirectory?: string) { }
}

