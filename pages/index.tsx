import type {NextPage} from "next";
import {withPageAuth} from "@supabase/auth-helpers-nextjs";
import {User} from "@supabase/gotrue-js/dist/main";

interface HomeProps {
  user: User
}

export const getServerSideProps = withPageAuth({redirectTo: '/login'});

const Home: NextPage<HomeProps> = ({user}: HomeProps) => {
  return (
    <div>Welcome {user?.email}</div>
  );
};

export default Home;
