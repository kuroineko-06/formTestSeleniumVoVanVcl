import React, { useState } from "react";
import "./App.css";

function App() {
  // State to store the input values
  const [url, setUrl] = useState("");
  const [elementType, setElementType] = useState("");
  const [attribute, setAttribute] = useState("");
  const [key, setKey] = useState("");
  const [indexData, setIndexData] = useState("");

  // State to store the table data
  const [tableData, setTableData] = useState([]);

  // Handle form submission
  const handleSubmit = () => {
    const newRow = {
      elementType,
      attribute,
      key,
      indexData,
      result: "", // Assuming result will be calculated or added later
    };
    setTableData([...tableData, newRow]);

    // Clear input fields
    setElementType("");
    setAttribute("");
    setKey("");
    setIndexData("");
  };

  return (
    <>
      <div className="w-full h-10"></div>
      <div className="w-3/4 h-[500px] m-auto border-x-2 border-y-2 bg-gray-100">
        {/* url */}
        <div className="w-2/4 h-15 m-auto pt-5 ">
          <div className="w-3/5 h-full m-auto">
            <label htmlFor="URL" className="mr-3">
              URL:
            </label>
            <input
              className="w-3/4"
              type="text"
              name="URL"
              placeholder="Set your URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
        </div>

        <div className="w-full h-4/5">
          {/* left page */}
          <div className="w-2/5 h-3/4 mt-14 pl-2 ml-3 float-start border-x-2 border-y-2">
            {/* element_type */}
            <div className="w-4/5 h-10  mt-5">
              <label htmlFor="element_type" className="mr-3">
                Element Type:
              </label>
              <input
                className="w-1/2"
                type="text"
                name="element_type"
                placeholder="Set your Element Type"
                value={elementType}
                onChange={(e) => setElementType(e.target.value)}
              />
            </div>
            {/* attribute */}
            <div className="w-4/5 h-10  mt-5">
              <label htmlFor="attribute" className="mr-3">
                Attribute:
              </label>
              <input
                className="w-1/2"
                type="text"
                name="attribute"
                placeholder="Set your Attribute"
                value={attribute}
                onChange={(e) => setAttribute(e.target.value)}
              />
            </div>
            {/* key */}
            <div className="w-4/5 h-10  mt-5">
              <label htmlFor="key" className="mr-3">
                Key:
              </label>
              <input
                className="w-1/2"
                type="text"
                name="key"
                placeholder="Set your Key"
                value={key}
                onChange={(e) => setKey(e.target.value)}
              />
            </div>
            {/* index_data */}
            <div className="w-4/5 h-10  mt-5">
              <label htmlFor="index_data" className="mr-3">
                Index Data:
              </label>
              <input
                className="w-1/2"
                type="text"
                name="index_data"
                placeholder="Set your Data"
                value={indexData}
                onChange={(e) => setIndexData(e.target.value)}
              />
            </div>
          </div>

          {/* right-page */}
          <div className="w-7/12 h-3/4 mt-10 float-end">
            <div className="w-4/5 h-full mt-5 m-auto border-x-2 border-y-2">
              <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                      <table className="min-w-full text-left text-sm font-light">
                        <thead className="border-b font-medium dark:border-neutral-500">
                          <tr>
                            <th scope="col" className="px-6 py-4">
                              #
                            </th>
                            <th scope="col" className="px-6 py-4">
                              Element Type
                            </th>
                            <th scope="col" className="px-6 py-4">
                              Attribute
                            </th>
                            <th scope="col" className="px-6 py-4">
                              Key
                            </th>
                            <th scope="col" className="px-6 py-4">
                              Index Data
                            </th>
                            <th scope="col" className="px-6 py-4">
                              Result
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {tableData.map((row, index) => (
                            <tr
                              className="border-b dark:border-neutral-500"
                              key={index}
                            >
                              <td className="whitespace-nowrap px-6 py-4 font-medium">
                                {index + 1}
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">
                                {row.elementType}
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">
                                {row.attribute}
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">
                                {row.key}
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">
                                {row.indexData}
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">
                                {row.result}
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
          </div>
        </div>

        {/* button */}
        <div className="w-full h-14">
          <button className="w-20 h-10 bg-blue-500 float-end mr-10 text-white">
            Test
          </button>
          <button
            className="w-24 h-10 bg-red-500 float-end mr-10 text-white"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
