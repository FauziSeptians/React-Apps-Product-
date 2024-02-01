import React from "react";
import { Link } from "react-router-dom";

export default function Button({ Name }) {
  return (
    <Link className="bg-red-200" to={"/"}>
      {Name}
    </Link>
  );
}
