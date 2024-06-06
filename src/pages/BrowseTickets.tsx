import { Ticket } from '../components/Ticket';
import { TicketEntity } from '../types/types';

interface Props {
  sellableTickets: TicketEntity[];
  openTicket: (ticket: TicketEntity) => void;
}

const BrowseTickets: React.FC<Props> = props => {
  const { openTicket, sellableTickets } = props;

  return (
    <div className="flex flex-col gap-4 flex-1 overflow-auto">
      <div className="flex gap-4 flex-wrap justify-evenly">
        {sellableTickets.map(ticket => (
          <Ticket {...ticket} onClick={() => openTicket(ticket)} />
        ))}
      </div>
    </div>
  );
};

export default BrowseTickets;
