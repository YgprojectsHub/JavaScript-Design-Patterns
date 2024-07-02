class LogLevel {
    static INFO = 'INFO';
    static DEBUG = 'DEBUG';
    static ERROR = 'ERROR';
}

class Logger {
    constructor(level) {
        this.level = level;
        this.nextLogger = null;
    }

    setNext(logger) {
        this.nextLogger = logger;
        return logger;
    }

    logMessage(level, message) {
        if (this.level === level) {
            this.write(message);
        } else if (this.nextLogger) {
            this.nextLogger.logMessage(level, message);
        }
    }

    write(message) {
        throw new Error('This method should be overridden');
    }
}

class InfoLogger extends Logger {
    constructor() {
        super(LogLevel.INFO);
    }

    write(message) {
        console.log(`INFO: ${message}`);
    }
}

class DebugLogger extends Logger {
    constructor() {
        super(LogLevel.DEBUG);
    }

    write(message) {
        console.log(`DEBUG: ${message}`);
    }
}

class ErrorLogger extends Logger {
    constructor() {
        super(LogLevel.ERROR);
    }

    write(message) {
        console.log(`ERROR: ${message}`);
    }
}

// Zinciri oluştur
const errorLogger = new ErrorLogger();
const debugLogger = new DebugLogger();
const infoLogger = new InfoLogger();

infoLogger.setNext(debugLogger).setNext(errorLogger);

// Log mesajlarını işleme
infoLogger.logMessage(LogLevel.INFO, 'This is an information.');
infoLogger.logMessage(LogLevel.DEBUG, 'This is a debug level information.');
infoLogger.logMessage(LogLevel.ERROR, 'This is an error information.');
