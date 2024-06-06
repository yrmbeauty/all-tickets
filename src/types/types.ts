export enum TicketStatus {
  'activated',
  'own'
}

export type TicketEntity = {
  name: string;
  description: string;
  status: TicketStatus;
};
