 export interface LoginResponse {
    success: string;
    data?: {
      token: string;
      user: {
        id: number;
        username: string;
        email: string;
      };
    };
    error?: string;
  }

  export interface resetPasswordResponse {
    success: string;
    data?: {
      token: string;
      user: {
        id: number;
        username: string;
        email: string;
      };
    };
    error?: string;
  }
  export interface forgotPasswordResponse {
    success: string;
    data?: {
      token: string;
      user: {
        id: number;
        username: string;
        email: string;
      };
    };
    error?: string;
  }
 