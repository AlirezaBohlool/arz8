import { Link, useParams } from "react-router-dom";
import useGetData from "../../services/api";
import Header from "../../components/header";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function CountryDetail() {
  const { name } = useParams();
  const { data, loading, error } = useGetData(`alpha/${name}`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data || data.length === 0) return <div>No data found</div>;

  const country = data[0];

  return (
    <>
      <Header />
      <div>
        <div>
          <Link to={"/"}>
            <button className="flex gap-4 items-center ml-8 mt-8 p-1 w-28 border rounded-md font-medium"><IoIosArrowRoundBack />Back
            </button>
          </Link>
        </div>
        <div className="w-full flex items-center justify-center ">
          <div className="">
            <img
              className="w-full h-48 object-cover"
              src={country.flags.png}
              alt={`Flag of ${country.name.common}`}
            />
          </div>
          <div className="w-2/6 pl-4">
            <strong className="text-lg">{country.name.common}</strong>
            <p>Population: {country.population}</p>
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital[0]}</p>
            <p>Area: {country.area} km²</p>
            <p>Languages: {Object.values(country.languages).join(", ")}</p>
            <p>Timezones: {country.timezones.join(", ")}</p>
          </div>
        </div>
      </div>
    </>
  );
}
