export interface IMessage {
  displayName: string;
  email: string;
  message: string;
  photoURL: string;
  timestamp: {
    nanoseconds: number;
    seconds: number;
  };
}
