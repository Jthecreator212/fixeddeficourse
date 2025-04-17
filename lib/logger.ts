type LogLevel = 'debug' | 'info' | 'warn' | 'error'

interface LogOptions {
  level?: LogLevel
  context?: string
  data?: any
}

class Logger {
  private static instance: Logger
  private isDevelopment: boolean

  private constructor() {
    this.isDevelopment = process.env.NODE_ENV === 'development'
  }

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger()
    }
    return Logger.instance
  }

  private formatMessage(message: string, options: LogOptions = {}): string {
    const timestamp = new Date().toISOString()
    const context = options.context ? `[${options.context}]` : ''
    const data = options.data ? `\nData: ${JSON.stringify(options.data, null, 2)}` : ''
    return `${timestamp} ${context} ${message}${data}`
  }

  debug(message: string, options?: LogOptions) {
    if (this.isDevelopment) {
      console.debug(this.formatMessage(message, { ...options, level: 'debug' }))
    }
  }

  info(message: string, options?: LogOptions) {
    console.info(this.formatMessage(message, { ...options, level: 'info' }))
  }

  warn(message: string, options?: LogOptions) {
    console.warn(this.formatMessage(message, { ...options, level: 'warn' }))
  }

  error(message: string, options?: LogOptions) {
    console.error(this.formatMessage(message, { ...options, level: 'error' }))
  }
}

export const logger = Logger.getInstance() 