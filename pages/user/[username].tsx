import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { ParsedUrlQuery } from "querystring";
import users from "../../data/users";
import { Employee } from "../../interfaces";
import Image from "next/image";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = users.map((user) => ({
    params: {
      username: user.username,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

interface Params extends ParsedUrlQuery {
  username: string;
}

interface EmployeeProps {
  user: Employee;
}

export const getStaticProps: GetStaticProps<EmployeeProps, Params> = async ({
  params,
}) => {
  const { username } = params!;
  return {
    props: {
      user: users.find((user) => user.username === username) as Employee,
    },
  };
};

const UserPage = ({ user }: EmployeeProps): JSX.Element => {
  return (
    <div className="pt-0 sm:pt-16">
      <div className="dark:bg-gray-800 text-white w-12/12 shadow-lg sm:w-9/12 sm:m-auto">
        <div className="relative sm:w-full">
          <Image
            src={user.cover_image}
            alt={user.username}
            className="object-cover object-center"
            height={384}
            width="100%"
          />
          <div className="bg-gray-800 bg-opacity-50 absolute flex items-end	w-full h-full top-0 left-0 p-8 gap-8">
            <Image
              src={user.avatar}
              alt={user.username}
              className="bg-gray-300 rounded-full mr-4"
              height={80}
              width={80}
            />
            <div>
              <h1 className="font-bold text-3xl">
                {user.first_name} {user.last_name}
              </h1>
              <p> {user.job_title} </p>
            </div>
          </div>
        </div>
        <div className="p-8">
          <p className="text-black dark:text-white">{user.description}</p>
          <Link href="/" passHref>
            <button className="dark:bg-green-400 dark:text-gray-800 bg-green-400 text-white font-semibold p-2 rounded-md mt-6">
              Back to all users
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
