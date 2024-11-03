import { useNavigate } from "react-router-dom";

export default function Card({ data }: any) {
  const navigate = useNavigate();

  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-8">
      {data.map((item: any, index: any) => (
        <div
          key={item.id || index}
          onClick={() => navigate(`/country/${item.cca2}`)}
          className="cursor-pointer p-4 border rounded-md shadow hover:shadow-lg"
        >
          <div>
            <img
              className="w-full h-24 object-cover"
              src={item.flags.png}
              alt={item.name?.common}
            />
          </div>
          <div className="mt-2">
            <strong>{item.name?.common}</strong>
            <p>Population: {item.population}</p>
            <p>Region: {item.region}</p>
            {item.capital?.map((capital: string, id: number) => (
              <p key={id}>Capital: {capital}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
