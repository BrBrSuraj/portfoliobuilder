import { useState } from "react";
import InputText from "../Inputs/InputText";
import TextArea from "../Inputs/TextArea";
import RadioButton from "../Inputs/RadioButton";

const Personal = () => {
  const [personalDetails, setpersonalDetails] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    dateOfBirth: "",
    about: "",
    email: "",
    phoneNumber: "",
    country: "",
    street: "",
    postCode: "",
    gender: "",
    addressline1: "",
    addressline2: "",
    addressline3: "",
    linkedin: "",
    github: "",
    indeed: "",
  });

  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];

  let handleInputChange = (data) => {
    setpersonalDetails({
      ...personalDetails,
      [data.target.name]: data.target.value,
    });
  };

  let handleRadioChange = (value) => {
    setpersonalDetails({
      ...personalDetails,
      gender: value,
    });
  };

  let onSubmit = (e) => {
    e.preventDefault();
    console.log(personalDetails);
  };
  return (
    <div className="text-sm">
      <form
        onSubmit={onSubmit}
        className=" w-full md:w-9/12 px-10 py-5 flex justify-center justify-items-center "
      >
        <span className="bg-green-200 w-10"></span>
        <div className="flex flex-col gap-5 tracking-wider border-2 border-green-200 px-2 py-2 w-full">
          <h1 className="text-lg tracking-widest text-center p-2 font-bold">
            Person Details
          </h1>
          <div className="flex flex-col md:flex-row gap-3">
            <InputText
              name="firstName"
              type="text"
              placeholder="Enter your first name"
              onChange={handleInputChange}
            />
            <InputText
              name="middleName"
              type="text"
              placeholder="Enter your Middle Name"
              onChange={handleInputChange}
            />
            <InputText
              name="lastName"
              type="text"
              placeholder="Enter your first name"
              onChange={handleInputChange}
            />
          </div>
{/* DOB */}
          <div className="flex flex-col md:flex-row gap-3">
            <InputText
              name="dateOfBirth"
              type="date"
              placeholder="Enter your first name"
              onChange={handleInputChange}
              className='max-w-fit md:w-8/12'
            />
          </div>

          {/* gender */}
          <div className="flex flex-col gap-1">
            <label className="font-semibold">Gender</label>
            <RadioButton
              options={genderOptions}
              selectedValue={personalDetails.gender}
              onchange={handleRadioChange}
            />
          </div>

          {/* about */}
          <div className="flex flex-col md:flex-row gap-4">
            <TextArea
              name="about"
              type="textarea"
              placeholder="Describe yourself"
              onChange={handleInputChange}
            />
          </div>
          {/* contact */}
          <div className="flex flex-col md:flex-row gap-3">
            <InputText
              name="email"
              type="email"
              placeholder="Enter your email: example@example.com"
              onChange={handleInputChange}
              className="min-w-full"
            />

            <InputText
              name="phoneNumber"
              type="text"
              placeholder="Enter your Phone Number"
              onChange={handleInputChange}
              className="min-w-full"
            />
          </div>
          {/* address */}
          <div className="flex flex-col md:flex-row gap-3">
            <InputText
              name="country"
              type="text"
              placeholder="Enter your country of resident"
              onChange={handleInputChange}
              className="min-w-full"
            />

            <InputText
              name="street"
              type="text"
              placeholder="Enter your Street"
              onChange={handleInputChange}
              className="min-w-full"
            />

            <InputText
              name="postCode"
              type="text"
              placeholder="Enter your post code"
              onChange={handleInputChange}
              className="min-w-full"
            />
          </div>
          {/* addressline */}
          <div className="flex flex-col md:flex-row gap-3">
            <InputText
              name="addressline1"
              type="text"
              placeholder="Enter your address 1"
              onChange={handleInputChange}
              className="min-w-full"
            />

            <InputText
              name="addressline2"
              type="text"
              placeholder="Enter your address 2 "
              onChange={handleInputChange}
              className="min-w-full"
            />

            <InputText
              name="addressline3"
              type="text"
              placeholder="Enter your address 3"
              onChange={handleInputChange}
              className="min-w-full"
            />
          </div>
          {/* social media link */}
          <div className="flex flex-col md:flex-row gap-3">
            <InputText
              name="linkedin"
              type="text"
              placeholder="paste here your LinkedIn profile url"
              onChange={handleInputChange}
              className="min-w-full"
            />

            <InputText
              name="github"
              type="text"
              placeholder="paste here your Github profile url "
              onChange={handleInputChange}
              className="min-w-full"
            />

            <InputText
              name="indeed"
              type="text"
              placeholder="paste here your indeed profile url"
              onChange={handleInputChange}
              className="min-w-full"
            />
          </div>
          <div className="flex justify-end px-2">
            <button
              className="btn bg-appBackground text-white text-lg px-8 rounded-md py-2"
              type="submit"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Personal;
