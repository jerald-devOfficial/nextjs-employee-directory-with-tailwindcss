import type { NextPage } from "next";
import users from "../data/users";
import UserCard from "../components/UserCard";

const Home: NextPage = () => {
  return (
    <div className="sm:w-9/12 sm:m-auto pt-16 pb-16">
      <h1 className="dark:text-white text-5xl font-bold text-center">
        ACME Corporation Employees
      </h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-3 mt-14 ml-8 mx-8 sm:mx-0">
        {users.map((user) => (
          <div key={user.id}>
            <UserCard {...user} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
