"use client";

import Image from "next/image";
import "./RsvpForm.scss";
import Link from "next/link";
import SelectField from "../components/SelectDiet/SelectDiet";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../components/InputField/InputField";
import axios from "axios";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Rsvp Form",
// };

interface AttendanceOption {
  value: string;
}

interface AttendanceSelect {
  options: AttendanceOption[];
}
interface DietOption {
  value: string;
}

interface DietSelect {
  options: DietOption[];
}

interface FormData {
  fullname: string;
  email: string;
  attending: string;
  dietaryRequirements: string;
}

export default function RsvpForm() {
  const attendanceSelect: AttendanceSelect = {
    options: [
      {
        value: "Yes",
      },
      {
        value: "No",
      },
    ],
  };

  const dietSelect: DietSelect = {
    options: [
      {
        value: "None",
      },
      {
        value: "Vegetarian",
      },
      {
        value: "Halaal",
      },
      {
        value: "Vegan",
      },
      {
        value: "Gluten-free",
      },
      {
        value: "Pescatarian",
      },
      {
        value: "Keto",
      },
      {
        value: "Paleo",
      },
      {
        value: "Kosher",
      },
      {
        value: "Low-carb",
      },
      {
        value: "Dairy-free",
      },
      {
        value: "Nut-free",
      },
      {
        value: "Lactose-free",
      },
      {
        value: "FODMAP",
      },
      {
        value: "Mediterranean",
      },
    ],
  };

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      fullname: "",
      email: "",
      attending: "",
      dietaryRequirements: "",
    },
    mode: "all",
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await axios.post("/api/create-rsvp", data, {
        headers: {
          "Content-Type": "application.json",
        },
      });

      if (response.status === 200) {
        toast.success("RSVP submitted successfully!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
        reset();
      } else {
        console.error("Failed to submit RSVP");
      }
    } catch (error) {
      console.error("An error occured:", error);
      toast.error("Failed to submit RSVP", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
  };

  return (
    <div className="form-image-cont">
      <div className="background-container">
        <Image
          src="/assets/book-bg.svg"
          width={400}
          height={300}
          alt="books-bg"
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-title">RSVP Form</div>
        <div className="fields-container">
          <Input
            type="text"
            {...register("fullname", {
              required: "Full name is required",
            })}
            placeholder="Name & Surname"
            errors={errors}
            className="name-field"
          />

          <Input
            type="email"
            {...register("email", {
              required: "Email Address is required",
            })}
            placeholder="johndoe@gmail.com"
            errors={errors}
            className="email-field"
          />

          <SelectField
            options={attendanceSelect.options}
            {...register("attending", {
              required: "Attendance is required",
            })}
            placeholder="Will you be attending the event?"
            errors={errors}
            id="attending"
            required
          />

          <SelectField
            options={dietSelect.options}
            {...register("dietaryRequirements", {
              required: "Dietary requirements are required",
            })}
            placeholder="Select Dietary Requirements"
            errors={errors}
            id="dietaryRequirements"
            required
          />
        </div>

        <ToastContainer />
        <div className="rsvp-btns">
          <Link href="/" passHref>
            Back Home
          </Link>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
