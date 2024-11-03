import { useState } from "react";

export default function Navbar({ data, loading, error, onSearch, onContinentChange }: any) {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const continent = event.target.value;
    setSelectedValue(continent);
    onContinentChange(continent); 
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    onSearch(term); 
  };

  return (
    <div className="w-full h-20 flex justify-between items-center">
      <div className="ml-8">
        <input
          placeholder="Search your country"
          className="w-72 h-12 border border-2 rounded-lg pl-3 outline-none"
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="mr-8">
        <select
          onChange={handleSelectChange}
          className="w-40 p-2 border outline-none rounded-md h-10 bg-white"
        >
          <option value="">All Continents</option>
          {data.map((item: any) =>
            item.continents.map((continent: string, id: number) => (
              <option key={id} value={continent}>
                {continent}
              </option>
            ))
          )}
        </select>
      </div>
    </div>
  );
}
