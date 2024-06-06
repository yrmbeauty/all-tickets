import { Ticket } from '../components/Ticket';
import { TicketStatus, TicketEntity } from '../types/types';

interface Props {
  openTicket: (ticket: TicketEntity) => void;
}

const ticket: TicketEntity = {
  name: 'Concert name',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum aliquam elit in aliquet. Sed ac ipsum velit. Nam vel eros eu nulla auctor rutrum. Praesent pretium ipsum ac orci vestibulum, a aliquet diam pellentesque. Integer scelerisque accumsan libero nec placerat. Vivamus fermentum faucibus scelerisque. Aenean eget volutpat ante. Mauris dictum orci a risus elementum, sed venenatis odio luctus. Pellentesque accumsan enim ante, quis suscipit elit pulvinar at. Morbi in porttitor mi, nec dignissim libero. Nulla sed metus mi. Praesent maximus laoreet purus ut faucibus. Maecenas rutrum vehicula ullamcorper. Donec ultrices suscipit feugiat. Nunc at euismod sem. Integer quis iaculis ligula, id posuere lectus. Nunc malesuada turpis lorem, ac mollis magna fringilla euismod. Nunc eget efficitur felis. Nam vel sapien nec purus dignissim porttitor a nec metus. Pellentesque id dolor at nunc finibus dictum. Nunc pharetra fringilla lectus vel venenatis. Suspendisse scelerisque quis nunc nec congue. Quisque pretium ligula eget mauris ultrices, et consequat leo tincidunt. Proin nibh metus, ullamcorper nec tincidunt feugiat, tempus at ligula.',
  status: TicketStatus.activated
};

const activeTickets = new Array(2).fill(ticket) as TicketEntity[];
const tickets = new Array(2).fill({
  ...ticket,
  status: TicketStatus.own
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
        <h1 className="px-10 py-4 text-lg divider">Owned</h1>
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
