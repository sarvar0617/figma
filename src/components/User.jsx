import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Header";

function User() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/users/${id}`)
      .then((res) => {
        setUser(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!user) return 

  return (
    <div>
      <div className="container mx-auto mt-10">
        <div className="p-6 md:w-2/3">
          <h1 className="text-2xl font-bold mb-4">
            {user.firstName} {user.lastName}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h2 className="text-lg font-semibold mb-2">
                Personal Information
              </h2>
              <ul className="space-y-2">
                <li>
                  <span className="font-medium">Email:</span> {user.email}
                </li>
                <li>
                  <span className="font-medium">Phone:</span> {user.phone}
                </li>
                <li>
                  <span className="font-medium">Birth Date:</span>{" "}
                  {new Date(user.birthDate).toLocaleDateString()}
                </li>
                <li>
                  <span className="font-medium">Age:</span> {user.age}
                </li>
                <li>
                  <span className="font-medium">Gender:</span> {user.gender}
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">Work Information</h2>
              <ul className="space-y-2">
                <li>
                  <span className="font-medium">Company:</span>{" "}
                  {user.company?.name || "N/A"}
                </li>
                <li>
                  <span className="font-medium">Department:</span>{" "}
                  {user.company?.department || "N/A"}
                </li>
                <li>
                  <span className="font-medium">Title:</span>{" "}
                  {user.company?.title || "N/A"}
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Address</h2>
            <p>
              {user.address?.address}, {user.address?.city},{" "}
              {user.address?.state} {user.address?.postalCode}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
