import Image from "next/image";
import Link from "next/link";
import { Employee } from "../../interfaces";

const UserCard = (props: Employee) => {
  return (
    <Link href={`/user/${props.username}`} passHref>
      <div className="dark:bg-gray-800 bg-gray-100 cursor-pointer dark:text-white p-4 rounded-md text-center shadow-xl">
        <Image
          src={props.avatar}
          alt={`${props.username}'s avatar`}
          width={64}
          height={64}
          className="bg-gray-400 rounded-full m-auto"
        />
        <div className="mt-2 font-bold">
          {props.first_name} {props.last_name}
        </div>
        <div className="font-light">{props.job_title}</div>
      </div>
    </Link>
  );
};

export default UserCard;
