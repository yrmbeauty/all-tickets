import { Ticket } from '../components/Ticket';
import { TicketStatus, TicketEntity } from '../types/types';

interface Props {
  openTicket: (ticket: TicketEntity) => void;
}

const ticket: TicketEntity = {
  name: 'Ticket',
  description: 'Concert description',
  status: TicketStatus.activated
};

const activeTickets = new Array(2).fill(ticket) as TicketEntity[];
const tickets = new Array(2).fill({
  ...ticket,
  isActive: false
}) as TicketEntity[];

const Mytickets: React.FC<Props> = (props: Props) => {
  const { openTicket } = props;

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
        <h1 className="px-10 py-4 text-lg divider">List</h1>
        <div className="flex gap-4 flex-wrap justify-evenly">
          {tickets.map(ticket => (
            <Ticket {...ticket} onClick={() => openTicket(ticket)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mytickets;
