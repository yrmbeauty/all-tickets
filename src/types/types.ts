export enum TicketStatus {
  'active',
  'owned',
  'sellable'
}
export type Page = 'myTickets' | 'ticket' | 'browseTickets';

export interface TicketEntity {
  name: string;
  description: string;
  status: TicketStatus;
}
