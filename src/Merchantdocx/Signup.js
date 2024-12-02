import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [descp, setdescp] = useState("")
  const [avatar, setavatar] = useState("")
  const [storename, setstorename] = useState("")
  const [error, setError] = useState(false)
  const Navigate = useNavigate()



  const handleEvent = (e) => {
    e.preventDefault();
    if (
      fname === "" || lname === "" || email === "" || phone === "" ||
      password === "" || descp === "" || storename === "" || !avatar
    ) {
      setError(true);
      return;
    }


    const formData = new FormData();
    formData.append("first_name", fname);
    formData.append("last_name", lname);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("password", password);
    formData.append("store_name", storename);
    formData.append("descp", descp);
    formData.append("avatar", avatar);

    fetch(`http://localhost:9000/api/register-merchant`, {
      method: "POST",
      body: formData,
    })
      .then(async (resp) => {
        const data = await resp.json();
        return { status: resp.status, body: data };
      })
      .then(({ status, body }) => {
        console.log(body); 
        if (status === 200 && body.success === true) {
          alert("Signup successful");
          Navigate("/"); 
        } else {
          setError(true);
          alert(body.message); 
        }
      })
      .catch((err) => {
        console.error(err);
        setError(true);
        alert("An error occurred during signup. Please try again.");
      });
    
  };


  return (
    <div className="signup max-w-4xl mx-auto mt-16 bg-white shadow-lg rounded-lg p-8">
      <h2 className="text-2xl font-bold text-gray-800 text-center">Signup</h2>
      <form className="space-y-4 mt-6 grid grid-cols-2 gap-6" onSubmit={handleEvent}>
        <input type="text" placeholder="Business Name" className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 col-span-2" value={storename} onChange={(e) => setstorename(e.target.value)} required />
        {error === true && storename === "" ? <span className="error-span01">please enter Store name</span> : null}

        <input type="text" placeholder="Business Descripton" className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 col-span-2" value={descp} onChange={(e) => setdescp(e.target.value)} required />
        {error === true && descp === "" ? <span className="error-span01">please enter Bussiness or Shop Description</span> : null}

        <input type="text" placeholder="Fisrt Nmae" className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300" value={fname} onChange={(e) => setFname(e.target.value)} required />
        {error === true && fname === "" ? <span className="error-span01">please enter First name</span> : null}

        <input type="text" placeholder="Last Name" className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300" value={lname} onChange={(e) => setLname(e.target.value)} required />
        {error === true && lname === "" ? <span className="error-span01">please enter Last name</span> : null}

        <input type="number" placeholder="Phone" className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        {error === true && phone === "" ? <span className="error-span01">please enter Phone Number</span> : null}

        <input
          type="file"
          placeholder="Avatar"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          onChange={(e) => setavatar(e.target.files[0])} 
          required
        />

        {error === true && !avatar ? (
          <span className="error-span01">Please upload an avatar</span>
        ) : null}
        <input type="email" placeholder="Email" className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300" value={email} onChange={(e) => setEmail(e.target.value)} required />
        {error === true && email === "" ? <span className="error-span01">please enter Email</span> : null}

        <input type="password" placeholder="Password" className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300" required />
        {error === true && password === "" ? <span className="error-span01">please enter Password</span> : null}

        <input type="password" placeholder="Confirm Password" className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300" value={password} onChange={(e) => setPassword(e.target.value)} required />
        {error === true && password === "" ? <span className="error-span01">please enter Confirm Password</span> : null}
        <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition col-span-2">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
