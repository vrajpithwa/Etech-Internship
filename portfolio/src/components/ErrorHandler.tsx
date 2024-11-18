interface ErrorData {
    id: number;
    message: string;
    stack: string;
    timestamp?: string;
  }
  export interface ErrorHandlerOptions {
    showNotification?: (message: string, errorData: ErrorData) => void;
  }
class ErrorHandler {
  private static instance: ErrorHandler;
  private listeners: ((error: ErrorData) => void)[] = [];
  private showNotification?: (message: string, errorData: ErrorData) => void;

  private constructor() {}

  static getInstance(): ErrorHandler {
    if (!ErrorHandler.instance) {
      ErrorHandler.instance = new ErrorHandler();
    }
    return ErrorHandler.instance;
  }

  setOptions(options: ErrorHandlerOptions) {
    if (options.showNotification) {
      this.showNotification = options.showNotification;
    }
  }

  addListener(callback: (error: ErrorData) => void) {
    this.listeners.push(callback);
  }

  removeListener(callback: (error: ErrorData) => void) {
    this.listeners = this.listeners.filter(listener => listener !== callback);
  }

  handleError = (error: Error | string, customMessage?: string) => {
    const errorData: ErrorData = {
      id: Date.now(),
      message: customMessage || (typeof error === 'string' ? error : error.message),
      stack: typeof error === 'string' 
        ? 'No stack trace available' 
        : error.stack || 'No stack trace available',
      timestamp: new Date().toISOString()
    };

    // Save to localStorage
    const storedErrors = localStorage.getItem('errors');
    const errors = storedErrors ? JSON.parse(storedErrors) : [];
    errors.push(errorData);
    localStorage.setItem('errors', JSON.stringify(errors.slice(-50))); // Keep last 50 errors

    // Notify all listeners
    this.listeners.forEach(listener => listener(errorData));

    // Show notification with complete error data
    if (this.showNotification) {
      this.showNotification(errorData.message, errorData);
    }

    // Optional: console log in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Handled Error:', errorData);
    }
  };
}

export const errorHandler = ErrorHandler.getInstance();