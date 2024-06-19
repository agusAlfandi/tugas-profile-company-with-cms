export default function getDataUser({ setData, setUser, setIsLoading }) {
  const getData = async () => {
    try {
      const res = await fetch("https://randomuser.me/api/?results=12");
      const response = await res.json();
      setData(response.results);
      setUser(response.results);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  return getData;
}
