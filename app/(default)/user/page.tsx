import { getServerSession } from "next-auth";

export default async () => {
  const session = await getServerSession();
  return <div>user comp{JSON.stringify(session)}</div>;
};
