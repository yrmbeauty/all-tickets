declare namespace Entity {
  enum TicketStatus {
    "activated",
    "own"
  }

  type Ticket = {
    name: string;
    description: string;
    status: TicketStatus
  }
}