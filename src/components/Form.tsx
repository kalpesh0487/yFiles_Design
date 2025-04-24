import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaWpforms } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { DeviceType, FormData } from "../types/types";


const Form = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [isRefresh, setIsRefresh] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const onSubmit = async (data: FormData) => {
    setIsRefresh(!isRefresh);
    try {
      const response = await fetch("http://localhost:3000/networkdata/nodes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const result = await response.json();
      console.log("Successfully posted:", result);
  
      reset();
      setIsOpen(false);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <div className="cursor-pointer relative">
      {!isOpen && (
        <div
          className="bg-slate-200 border-2 p-3 rounded-full shadow-lg "
          onClick={handleClick}
        >
          <FaWpforms size={20} />
        </div>
      )}

      {isOpen && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white border p-6 top-7 left-10 rounded-lg shadow-xl space-y-4 w-80 relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            className="absolute top-2 text-4xl  right-2 cursor-pointer hover:text-red-500"
            onClick={handleClick}
          >
            <IoMdClose size={20}/>
          </button>

          <h2 className="text-lg font-semibold">Network Form</h2>

          <div>
            <label className="block text-sm font-medium">Label</label>
            <input
              {...register("label")}
              type="text"
              placeholder="Firewall3"
              className="mt-1 w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Type</label>
            <select
              {...register("type")}
              className="mt-1 w-full border rounded p-2"
              defaultValue=""
            >
              <option value="" disabled>
                Select type
              </option>
              {Object.entries(DeviceType).map(([key, value]) => (
                <option key={key} value={value}>
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">IP Address</label>
            <input
              {...register("ip")}
              type="text"
              placeholder="192.168.91.112"
              className="mt-1 w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Status</label>
            <select
              {...register("status")}
              className="mt-1 w-full border rounded p-2"
            >
              <option value="inactive">Inactive</option>
              <option value="active">Active</option>
              <option value="warning">Warning</option>
              <option value="empty">Empty</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Form;