import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Home() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const filteredData = data.filter((item) =>
    item.company.title.toLowerCase().includes(search.toLowerCase())
  );
  
  useEffect(() => {
    const controller = new AbortController();

    axios
      .get("https://dummyjson.com/users", { signal: controller.signal })
      .then((res) => {
        setData(res.data.users);
        console.log(res.data);
      })
      .catch((err) => console.log(err));

    return () => {
      controller.abort();
    };
  }, []);
  if (!data) return <div>Loading...</div>;

  return (
    <div className="container mx-auto mt-10">
      <input
        className="w-full h-[52px] border-[#00000096] border-[2px] rounded-sm pl-5 text-2xl outline-none"
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mt-20">
        {filteredData.map((item, index) => (
          <div
            onClick={() => navigate(`/user/${item.id}`)}
            key={index}
            className="w-full max-w-[296px] mx-auto h-auto"
          >
            <div className="aspect-square w-full bg-[#109BE9] flex justify-center items-center">
              <img className="w-full" src={item.image} alt="" />
            </div>
            <div className="pl-2 flex flex-col gap-3 mt-3">
              <h1 className="font-semibold text-xl md:text-2xl line-clamp-3">
                {item.company.title}
              </h1>
              <div className="flex gap-3">
                <span className="text-[#9A9AB0]">
                  {item.firstName} {item.lastName}
                </span>
                <span className="text-[#9A9AB0]">{item.birthDate}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
