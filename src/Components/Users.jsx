import React from "react";

const Users = () => {
  const handleAddUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const newUser = { name, email };

    //* How to send data(User data we got from form) to the server
    fetch("http://localhost:3000/users", {
      method: "POST", //* STEP-1
      headers: {
        //* STEP-2
        "Content-type": "application/json",
      }, //* STEP-3
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("User Added Sucessfully");
          form.reset();
        }
      });
  };

  return (
    <div>
      <form
        onSubmit={handleAddUser}
        className="flex flex-col gap-5 mt-5 p-5 border rounded-sm"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="p-2 border rounded-xs"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="p-2 border rounded-xs"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Users;
