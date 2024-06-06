import TicketsList from '../components/TicketsList';
import { TicketEntity } from '../types/types';

interface Props {
  activeTickets: TicketEntity[];
  ownedTickets: TicketEntity[];
  openTicket: (ticket: TicketEntity) => void;
}

const Mytickets: React.FC<Props> = (props: Props) => {
  const { openTicket, ownedTickets, activeTickets } = props;

  return (
    <div className="flex flex-col gap-4 flex-1 overflow-auto px-6">
      <h1 className="px-10 py-4 text-lg divider">Active</h1>
      <TicketsList tickets={activeTickets} onTicketClick={openTicket} />

      <h1 className="px-10 py-4 text-lg divider">Owned</h1>
      <TicketsList tickets={ownedTickets} onTicketClick={openTicket} />
    </div>
  );
};

export default Mytickets;
