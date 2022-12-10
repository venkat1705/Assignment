import React, { useEffect, useState } from "react";
import data from "../data";
import "../App.css";
import Dropdown from "./Dropdown";

const Home = () => {
  const [isActive, setisActive] = useState(null);
  const [Data, setData] = useState(data);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const sortArray = () => {
    const sorted = [...Data].sort((a, b) => {
      if (a.first_name < b.first_name) {
        return -1;
      }
      return 0;
    });
    setData(sorted);
  };

  const sortArrayDesc = () => {
    const sorted = [...Data].sort((a, b) => {
      if (a.first_name > b.first_name) {
        return -1;
      }
      return 0;
    });
    setData(sorted);
  };

  const sortNone = () => {
    const sorted = [...Data].sort((a, b) => {
      if (a.id < b.id) {
        return -1;
      }
      return 0;
    });
    setData(sorted);
  };
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-lg">
            <div className="overflow-auto rounded-lg shadow">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-2 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-3 text-xs font-bold text-center text-gray-500 uppercase flex justify-between items-center mt-1"
                    >
                      First_Name
                      <Dropdown
                        sortArray={sortArray}
                        sortArrayDesc={sortArrayDesc}
                        sortNone={sortNone}
                      />
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                    >
                      last_name
                    </th>
                    <th
                      scope="col"
                      className="px-20 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                    >
                      email
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                    >
                      gender
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                    >
                      ip_address
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                    >
                      airport code
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                    >
                      time
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                    >
                      status
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                    >
                      mobile
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                    >
                      area
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                    >
                      show
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                    >
                      edit
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {Data.map((item, i) => (
                    <tr
                      key={item.id}
                      className={classNames(
                        isActive === i + 1 && "active"
                          ? "bg-gray-300"
                          : "bg-white"
                      )}
                    >
                      <td className="px-2 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        {item.id}
                      </td>
                      <td className="px-2 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {item.first_name}
                      </td>
                      <td className="px-2 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {item.last_name}
                      </td>
                      <td className="px-2 py-4 text-sm font-medium text-center whitespace-nowrap">
                        {item.email}
                      </td>
                      <td className="px-2 py-4 text-sm font-medium text-center whitespace-nowrap">
                        {item.gender}
                      </td>
                      <td className="px-2 py-4 text-sm font-medium text-center whitespace-nowrap">
                        {item.ip_address}
                      </td>
                      <td className="px-2 py-4 text-sm font-medium text-center whitespace-nowrap">
                        {item.airport_code}
                      </td>
                      <td className="px-2 py-4 text-sm font-medium text-center whitespace-nowrap">
                        {item.time}
                      </td>
                      <td className="px-2 py-4 text-sm font-medium text-center whitespace-nowrap">
                        {item.status === "TRUE" ? (
                          <p className="bg-green-500 text-sm font-medium text-center whitespace-nowrap text-white">
                            {item.status}
                          </p>
                        ) : (
                          <p className="bg-red-500 text-sm font-medium text-center whitespace-nowrap text-white">
                            {item.status}
                          </p>
                        )}
                      </td>
                      <td className="px-2 py-4 text-sm font-medium text-center whitespace-nowrap">
                        {item.mobile}
                      </td>
                      <td className="px-2 py-4 text-sm font-medium text-center whitespace-nowrap">
                        {item.area}
                      </td>
                      <td className="px-2 py-4 text-sm font-medium text-center whitespace-nowrap">
                        {item.show}
                      </td>
                      <td className="px-2 py-4 text-sm font-medium text-center whitespace-nowrap">
                        {item.edit}
                      </td>
                      <td className="px-2 py-4 text-sm font-medium text-right whitespace-nowrap">
                        <button
                          onClick={() => {
                            setisActive(item.id);
                          }}
                        >
                          Change Color
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
