import '@twa-dev/sdk';
import Mytickets from './pages/Mytickets';
import './App.css';
import { CHAIN, TonConnectButton } from '@tonconnect/ui-react';
import { useTonConnect } from './hooks/useTonConnect';
import { useState } from 'react';
import { Page, TicketEntity, TicketStatus } from './types/types';
import BrowseTickets from './pages/BrowseTickets';
import TicketPage from './pages/TicketPage';

const ticket: TicketEntity = {
  name: 'Concert name',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum aliquam elit in aliquet. Sed ac ipsum velit. Nam vel eros eu nulla auctor rutrum. Praesent pretium ipsum ac orci vestibulum, a aliquet diam pellentesque. Integer scelerisque accumsan libero nec placerat. Vivamus fermentum faucibus scelerisque. Aenean eget volutpat ante. Mauris dictum orci a risus elementum, sed venenatis odio luctus. Pellentesque accumsan enim ante, quis suscipit elit pulvinar at. Morbi in porttitor mi, nec dignissim libero. Nulla sed metus mi. Praesent maximus laoreet purus ut faucibus. Maecenas rutrum vehicula ullamcorper. Donec ultrices suscipit feugiat. Nunc at euismod sem. Integer quis iaculis ligula, id posuere lectus. Nunc malesuada turpis lorem, ac mollis magna fringilla euismod. Nunc eget efficitur felis. Nam vel sapien nec purus dignissim porttitor a nec metus. Pellentesque id dolor at nunc finibus dictum. Nunc pharetra fringilla lectus vel venenatis. Suspendisse scelerisque quis nunc nec congue. Quisque pretium ligula eget mauris ultrices, et consequat leo tincidunt. Proin nibh metus, ullamcorper nec tincidunt feugiat, tempus at ligula.',
  status: TicketStatus.active
};

const activeTickets = new Array(2).fill(ticket) as TicketEntity[];
const ownedTickets = new Array(5).fill({
  ...ticket,
  status: TicketStatus.owned
}) as TicketEntity[];
const sellableTickets = new Array(5).fill({
  ...ticket,
  status: TicketStatus.sellable
}) as TicketEntity[];

function App() {
  const { network } = useTonConnect();

  const [ticket, setTicket] = useState<TicketEntity>();
  const [page, setPage] = useState<Page>('myTickets');

  const openTicket = (ticket: TicketEntity) => {
    setPage('ticket');
    setTicket(ticket);
  };

  const CurrentPage = () => {
    switch (page) {
      case 'myTickets':
        return (
          <Mytickets
            openTicket={openTicket}
            activeTickets={activeTickets}
            ownedTickets={ownedTickets}
          />
        );
      case 'ticket':
        return ticket ? <TicketPage {...ticket} /> : null;
      case 'browseTickets':
        return (
          <BrowseTickets
            sellableTickets={sellableTickets}
            openTicket={openTicket}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <header className="flex gap-4 items-center p-2">
        <TonConnectButton className="ml-auto" />
        {network
          ? // eslint-disable-next-line @typescript-eslint/no-unsafe-enum-comparison
            network === CHAIN.MAINNET
            ? 'mainnet'
            : 'testnet'
          : 'N/A'}{' '}
      </header>

      <CurrentPage />

      <footer className="flex gap-4 p-2">
        <button
          className={`btn flex-1 btn-info ${page === 'myTickets' ? 'pointer-events-none' : 'btn-outline'}`}
          onClick={() => setPage('myTickets')}
        >
          My tickets
        </button>
        <button
          className={`btn flex-1 btn-info ${page === 'browseTickets' ? 'pointer-events-none' : 'btn-outline'}`}
          onClick={() => setPage('browseTickets')}
        >
          Browse tickets
        </button>
      </footer>
    </>
  );
}

export default App;
