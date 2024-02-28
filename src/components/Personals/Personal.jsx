import { useState } from "react";
import InputText from "../Inputs/InputText";
import TextArea from "../Inputs/TextArea";

const Personal = () => {
  const [personalDetails, setpersonalDetails] = useState({
    firstName: "",
    lastName: "",
    about:"",
    email: "",
    phoneNumber: "",
    country: "",
    street: "",
    postCode: "",
  });
let handleInputChange=(data)=>{
  
setpersonalDetails({
 ...personalDetails,
    [data.target.name]:data.target.value
})

}
console.log(personalDetails)
  
  return (
    <>
    <h1 className="px-4 md:text-center font-bold text-md mt-4">Personal Details</h1>
        <form className=" w-full md:w-10/12">
          <div className="flex flex-col gap-1 tracking-wider">
            <span>Personal information</span>
          <div className="flex flex-col md:flex-row gap-4">
          <InputText
              name="firstName"
              type="text"
              placeholder="Enter your first name"
              onChange={handleInputChange}
            />

<InputText
              name="lastName"
              type="text"
              placeholder="Enter your first name"
              onChange={handleInputChange}
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4">
          <TextArea
              name="about"
              type="textarea"
              placeholder="Describe yourself"
              onChange={handleInputChange}
            />
          </div>

          </div>
        </form>
    </>
  );
};

export default Personal;


{/* <div className="flex flex-col md:flex-row">
<InputText
  name="email"
  type="email"
  placeholder="Enter your email: example@example.com"
  value={personalDetails.email}
  onChange={(e) => setpersonalDetails(e.target.value)}
  className="min-w-full"
/>

<InputText
  name="phoneNumber"
  type="text"
  placeholder="Enter your Phone Number"
  value={personalDetails.phoneNumber}
  onChange={(e) => setpersonalDetails(e.target.value)}
  className="min-w-full"
/>
</div>


<div className="flex flex-col md:flex-row">
<InputText
  name="country"
  type="text"
  placeholder="Enter your country of resident"
  value={personalDetails.country}
  onChange={(e) => setpersonalDetails(e.target.value)}
  className="min-w-full"
/>

<InputText
  name="street"
  type="text"
  placeholder="Enter your Street"
  value={personalDetails.street}
  onChange={(e) => setpersonalDetails(e.target.value)}
  className="min-w-full"
/>

<InputText
  name="postCode"
  type="text"
  placeholder="Enter your post code"
  value={personalDetails.postcode}
  onChange={(e) => setpersonalDetails(e.target.value)}
  className="min-w-full"
/>
</div>



<div className="flex flex-col md:flex-row">
<InputText
  name="country"
  type="text"
  placeholder="Enter your country of resident"
  value={personalDetails.country}
  onChange={(e) => setpersonalDetails(e.target.value)}
  className="min-w-full"
/>

<InputText
  name="street"
  type="text"
  placeholder="Enter your Street"
  value={personalDetails.street}
  onChange={(e) => setpersonalDetails(e.target.value)}
  className="min-w-full"
/>

<InputText
  name="postCode"
  type="text"
  placeholder="Enter your post code"
  value={personalDetails.postcode}
  onChange={(e) => setpersonalDetails(e.target.value)}
  className="min-w-full"
/>
</div> */}
