import { useState } from "react";
import Card from "../../components/card";
import Header from "../../components/header";
import Navbar from "../../components/navbar";
import useGetData from "../../services/api";

export default function Home() {
  const { data, loading, error } = useGetData('all');
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedContinent, setSelectedContinent] = useState<string>("");

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleContinentChange = (continent: string) => {
    setSelectedContinent(continent);
  };

  const filteredData = data?.filter(item => {
    const matchesSearch = item.name?.common.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesContinent = selectedContinent ? item.region === selectedContinent : true;
    return matchesSearch && matchesContinent;
  });

  return (
    <>
      <Header />
      <Navbar 
        data={data} 
        loading={loading} 
        error={error} 
        onSearch={handleSearch} 
        onContinentChange={handleContinentChange} 
      />
      <Card data={filteredData} />
    </>
  );
}
