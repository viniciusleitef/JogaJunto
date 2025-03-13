export interface GoogleLogin{
    credential: string;
}

export interface DecodedToken {
    id: string,
    googleId: string,
    email: string,
    username: string | null,
    picture: string,
    createdAt: string,
    updatedAt: string
    iat: number,
    exp: number
  }