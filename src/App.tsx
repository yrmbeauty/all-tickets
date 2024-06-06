import '@twa-dev/sdk';
import Mytickets from './pages/Mytickets';
import './App.css';
import { CHAIN, TonConnectButton } from '@tonconnect/ui-react';
import { useTonConnect } from './hooks/useTonConnect';
import { useState } from 'react';
import { Ticket } from './components/Ticket';
import { Page, TicketEntity } from './types/types';
import BuyTickets from './pages/BuyTickets';

function App() {
  const { network } = useTonConnect();

  const [ticket, setTicket] = useState<TicketEntity>();
  const [page, setPage] = useState<Page>('myTickets');

  const openTicket = (ticket: TicketEntity) => {
    setPage('ticket');
    setTicket(ticket);
  };

  const buyTickets = () => {
    setPage("buyTickets")
  }

  const CurrentPage = () => {
    switch (page) {
      case "myTickets":
        return <Mytickets openTicket={openTicket} />;
      case "ticket":
        return ticket ? <Ticket {...ticket} /> : null;
      case "buyTickets":
        return <BuyTickets />;
      default:
        return null
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
        >
          My tickets
        </button>
        <button
          // disabled={page === 'buy'}
          className="btn flex-1 btn-outline btn-success"
          // onClick={() => buyTickets()}
        >
          Buy ticket
        </button>
      </footer>
    </>
  );
}

export default App;
