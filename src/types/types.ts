export enum TicketStatus {
  'activated',
  'own'
}
export type Page = "myTickets" | "ticket"

export type TicketEntity = {
  name: string;
  description: string;
  status: TicketStatus;
};
