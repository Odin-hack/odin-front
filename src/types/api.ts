export interface AuthResponse {
  token: string
  user: {
    id: number
    email: string
  }
}

export interface ApiResponse<T> {
  data?: T
  error?: string
} 