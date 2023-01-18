import React from "react";
import useSWR from "swr";

const fetcher = async () => {
  const response = await fetch(`http://localhost:4000/dashboard`);
  const data = await response.json();
  return data;
};

const DashboardSWR = () => {
  const { data, error } = useSWR("dashboard", fetcher);

  if (error) return "An Error has occured";
  console.log(error);
  if (!data) return "Loading";

  return (
    <div>
      <h1>Dashboard</h1>
      <hr />
      <h2>Posts - {data.posts}</h2>
      <h2>Likes - {data.likes}</h2>
      <h2>Followers - {data.followers}</h2>
      <h2>Following - {data.following}</h2>
    </div>
  );
};

export default DashboardSWR;
