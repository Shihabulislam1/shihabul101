export const validateString = (value: unknown,maxLength:number) => {
    if (!value || typeof value !== "string" || value.length > maxLength) {
      return false;
    }
    return true;
  };
  
  export const getErrorMessage = (error: any): string => {
    let message: string;
    if (error instanceof Error) {
      message = error.message;
    } else if (error && typeof error === "object" && error.message) {
      message = String(error.message);
    } else if (typeof error === "string") {
      message = error;
    } else {
      message = "Unknown Error";
    }
    return message;
  };