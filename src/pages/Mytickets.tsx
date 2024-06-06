import { Ticket } from '../components/Ticket';
import { TicketEntity } from '../types/types';

interface Props {
  activeTickets: TicketEntity[];
  ownedTickets: TicketEntity[];
  openTicket: (ticket: TicketEntity) => void;
}

const Mytickets: React.FC<Props> = (props: Props) => {
  const { openTicket, ownedTickets, activeTickets } = props;

  return (
    <div className="flex flex-col gap-4 flex-1 overflow-auto">
      <div>
        <h1 className="px-10 py-4 text-lg divider">Active</h1>
        <div className="flex gap-4 flex-wrap justify-evenly">
          {activeTickets.map(ticket => (
            <Ticket {...ticket} onClick={() => openTicket(ticket)} />
          ))}
        </div>
      </div>

      <div>
        <h1 className="px-10 py-4 text-lg divider">Owned</h1>
        <div className="flex gap-4 flex-wrap justify-evenly">
          {ownedTickets.map(ticket => (
            <Ticket {...ticket} onClick={() => openTicket(ticket)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mytickets;
