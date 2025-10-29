import React, { use, useState } from "react";

const Users = ({ userPromise }) => {
  const usersGotFromDB = use(userPromise);
  const [users, setUsers] = useState(usersGotFromDB);

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
          newUser._id = data.insertedId;
          const newUsers = [...users, newUser];
          setUsers(newUsers);

          alert("User Added Sucessfully");
          form.reset();
        }
      });
  };

  return (
    <div className="flex items-center gap-20 mt-10">
      <form
        onSubmit={handleAddUser}
        className="flex flex-col gap-5 p-5 border rounded-sm h-[210px]"
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

      <div>
        <h2 className="text-2xl font-semibold">Users {users.length}</h2>

        <div className="grid grid-cols-4 gap-3">
          {users.map(({ _id, name, email }) => (
            <div key={_id} className="relative p-5 border rounded-sm">
              <h3>{name}</h3>
              <p>{email}</p>
              <button className="absolute top-0 right-0 mr-2 p-0! bg-transparent! hover:border-transparent! hover:text-indigo-400">x</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
