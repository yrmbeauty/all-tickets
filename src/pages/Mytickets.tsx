import { Ticket } from "../components/Ticket";

type Props = {}

const ticket = {
  name: "Ticket",
  description: "Concert description",
  isActive: true,
}

const activeTickets = new Array(2).fill(ticket);
const tickets = new Array(2).fill({...ticket, isActive: false});

const Mytickets: React.FC<Props> = props => {
  const {} = props;

  return (
    <div>
      <h1 className="text-lg">Active</h1>
      <div>{activeTickets.map((ticket) => <Ticket {...ticket} />)}</div>
      <h1 className="text-lg">List</h1>
      <div>{tickets.map((ticket) => <Ticket {...ticket} />)}</div>
    </div>
   )
};

export default Mytickets;