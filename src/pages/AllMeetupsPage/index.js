import MeetupItem from "../../components/meetups/MeetupItem";
import List from "../../components/ui/List";
import { useFetch } from "../../util-hooks/useFetch";
import { Helmet } from "react-helmet";
import Loader from "../../components/ui/Loader";

export default function AllMeetupsPage() {
  const { data } = useFetch({
    url: "/data.json",
  });

  if (!data) return <Loader />;
  return (
    <>
      <Helmet>
        <title>React Meetups | All Meetups</title>
        <meta name="description" content="All available meetups" />
      </Helmet>
      <section>
        <h1>All Meetups</h1>
        <List>
          {data.map((item) => (
            <MeetupItem key={item.id} item={item} />
          ))}
        </List>
      </section>
    </>
  );
}
