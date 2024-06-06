type Props = {
  name: string;
  description: string;
  isActive: boolean;
}

export const Ticket: React.FC<Props> = (props) => {
  const { isActive, name, description } = props;
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full">
      <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">{isActive ? "Show" : "Buy"}</button>
        </div>
      </div>
    </div>
  )
}