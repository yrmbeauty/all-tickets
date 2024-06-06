import TicketsList from '../components/TicketsList';
import { TicketEntity } from '../types/types';

interface Props {
  sellableTickets: TicketEntity[];
  openTicket: (ticket: TicketEntity) => void;
}

const BrowseTickets: React.FC<Props> = props => {
  const { openTicket, sellableTickets } = props;

  return (
    <div className="flex flex-col gap-4 flex-1 overflow-auto">
      <TicketsList tickets={sellableTickets} onTicketClick={openTicket} />
    </div>
  );
};

export default BrowseTickets;
