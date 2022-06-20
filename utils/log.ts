export class Log {
  static error = (message: string): void => {
    console.log(`⛔ ${message}`);
  }

  static action = (message: string): void => {
    console.log(`⚡ ${message}`);
  }

  static info = (message: string): void => {
    console.log(`🟢 ${message}`);
  }
}
