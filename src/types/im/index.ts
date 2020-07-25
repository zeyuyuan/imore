export type Friend = {
  id: string;
  name: string;
  avatar: string;
  latestMessage?: string;
}

export type MessageType = {
  id: string;
  from: Friend;
  to: Friend;
  message: string;
  send_time: number;
}
