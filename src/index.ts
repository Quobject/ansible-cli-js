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
            const message = `error: '${error}' stdout = '${stdout}' stderr = '${stderr}'`;
            console.error(message);
            reject(message);
          }
          //const message = `error: '${error}' stdout = '${stdout}' stderr = '${stderr}'`;
          //console.error(message);
          resolve({ stderr: stderr, stdout: stdout });
        });
      });
    }).then(function (data: { stderr: string, stdout: string }) {

      let result = {
        command: execCommand,
        error: data.stderr,
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

