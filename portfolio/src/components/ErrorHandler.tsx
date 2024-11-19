interface ErrorData {
    id: number;
    message: string;
    stack: string;
    timestamp?: string;
  }
interface ErrorHandlerOptions {
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
      timestamp: new Date().toISOString(),
    };
  
    // Check if this error has already been handled recently
    const lastError = localStorage.getItem('lastError');
    if (lastError && JSON.stringify(errorData) === lastError) {
      console.warn('Duplicate error suppressed:', errorData);
      return;
    }
    localStorage.setItem('lastError', JSON.stringify(errorData));
  
    // Notify all listeners
    this.listeners.forEach(listener => listener(errorData));
  
    // Show notification
    if (this.showNotification) {
      this.showNotification(errorData.message, errorData);
    }
  };
  
}

export const errorHandler = ErrorHandler.getInstance();