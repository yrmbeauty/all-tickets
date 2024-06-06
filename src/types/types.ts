export enum TicketStatus {
  'activated',
  'own'
}
export type Page = 'myTickets' | 'ticket' | 'browseTickets';

export interface TicketEntity {
  name: string;
  description: string;
  status: TicketStatus;
}
