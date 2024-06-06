import { TicketEntity, TicketStatus } from '../types/types';

type Props = {
  onClick: () => void;
} & TicketEntity;

export const Ticket: React.FC<Props> = props => {
  const { status, name, description, onClick } = props;
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="line-clamp-3">{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={onClick}>
            {status === TicketStatus.activated ? 'Show' : 'Activate'}
          </button>
        </div>
      </div>
    </div>
  );
};
