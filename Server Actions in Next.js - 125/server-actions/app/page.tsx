"use client";

import { submitAction } from "@/actions/form";
import { useRef } from "react";

export default function Home() {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <div className="w-2/3 mx-auto my-12">
      <form
        ref={ref}
        action={async (formData) => {
          await submitAction(formData);
          ref.current?.reset();
        }}
      >
        <div>
          <label htmlFor="name">Name</label>
          <input
            className="text-white mx-4"
            type="text"
            name="name"
            id="name"
          />
        </div>

        <div>
          <label htmlFor="add">Address</label>
          <input
            className="text-white"
            type="text"
            name="add"
            id="add"
          />
        </div>

        <div>
          <button className="border border-white px-3">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}