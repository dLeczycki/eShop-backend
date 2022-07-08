export class Log {
  static error = (message: string): void => {
    console.error(`⛔ ${message}`);
  }

  static action = (message: string): void => {
    console.log(`⚡ ${message}`);
  }

  static info = (message: string): void => {
    console.log(`🟢 ${message}`);
  }

  static data = (data: any): void => {
    console.log(data);
  }
}
