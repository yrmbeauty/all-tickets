import { TicketEntity } from '../types/types';
import { Ticket } from './Ticket';

interface Props {
  tickets: TicketEntity[];
  onTicketClick: (ticket: TicketEntity) => void;
}

const TicketsList: React.FC<Props> = props => {
  const { tickets, onTicketClick } = props;

  return (
    <div className="flex gap-4 flex-wrap justify-evenly">
      {tickets.map(ticket => (
        <Ticket {...ticket} onClick={() => onTicketClick(ticket)} />
      ))}
    </div>
  );
};

export default TicketsList;
