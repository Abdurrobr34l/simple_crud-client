import React from "react";

const Users = () => {
  const handleAddUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    console.log(name, email);

    fetch("")
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
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
