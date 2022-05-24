import { useForm } from "react-hook-form";
import Card from "../../ui/Card";
import { Actions, Control, ErrorMsg, Form } from "./styles.js";

const isRequired = "This field is required";

export default function NewMeetupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert(
      "TODO: Call endpoint of API to add new Meetup. You can see data in the console of your browser."
    );
    //TODO: Call endpoint to add new Meetup
  };

  return (
    <Card>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Control>
          <label htmlFor="title">Meetup Title</label>
          <input
            {...register("title", {
              required: isRequired,
              maxLength: {
                value: 100,
                message: "Maximum 100 characters",
              },
            })}
            type="text"
            id="title"
          />
          {errors.title && <ErrorMsg>{errors.title.message}</ErrorMsg>}
        </Control>
        <Control>
          <label htmlFor="image">Meetup Image</label>
          <input
            {...register("image", {
              required: isRequired,
              maxLength: {
                value: 100,
                message: "Maximum 100 characters",
              },
            })}
            type="url"
            id="image"
          />
          {errors.image && <ErrorMsg>{errors.image.message}</ErrorMsg>}
        </Control>
        <Control>
          <label htmlFor="address">Address</label>
          <input
            {...register("address", {
              required: isRequired,
              maxLength: {
                value: 100,
                message: "Maximum 100 characters",
              },
            })}
            type="text"
            id="address"
          />
          {errors.address && <ErrorMsg>{errors.address.message}</ErrorMsg>}
        </Control>
        <Control>
          <label htmlFor="description">Description</label>
          <textarea
            {...register("description", {
              required: isRequired,
              maxLength: {
                value: 400,
                message: "Maximum 400 characters",
              },
            })}
            id="description"
            rows="5"
          />
          {errors.description && (
            <ErrorMsg>{errors.description.message}</ErrorMsg>
          )}
        </Control>
        <Actions>
          <input type="submit" value="Add Meetup" />
        </Actions>
      </Form>
    </Card>
  );
}
