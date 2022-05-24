import Helmet from "react-helmet";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function NewMeetupPage() {
  return (
    <section>
      <Helmet>
        <title>Add New Meetup</title>
        <meta name="description" content="Add new meetups to the list" />
      </Helmet>
      <h1>Add New Meetup</h1>
      <NewMeetupForm />
    </section>
  );
}
