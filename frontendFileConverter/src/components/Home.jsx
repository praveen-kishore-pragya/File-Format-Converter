import { useRef } from "react";

export const Home = () => {
  const inputRef = useRef(null);

  function handleFileUpload() {
    console.log("Input button clicked");
    inputRef.current.click();
  }


  const fileHandler = (event) =>{
    const fileUploaded = event.target.files[0];
    uploadFileHandler();
    console.log(fileUploaded);
  }

  const uploadFileHandler = () => {
    
  }


  return (
    <div className="flex flex-col mt-16 items-center justify-center align-middle">
      <div className="hero flex flex-col w-96 h-96 bg-indigo-500">
        <div className="intro text-center">
          <span className="text-2xl font-bold">Convert Files</span>
        </div>

        {/* Convert Button */}
        <div className="button h-full flex flex-col items-center justify-center">
          <input
            ref={inputRef}
            type="file"
            className="hidden"
            name="fileUpload"
            id="fileUpload"
            onChange={fileHandler}
          />
          <button
            type="button"
            className=" flex w-40 h-12 items-center justify-center space-x-4 bg-red-700 rounded-lg"
            onClick={handleFileUpload}
          >
            <span>Convert Files</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M11.47 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06l-3.22-3.22V16.5a.75.75 0 0 1-1.5 0V4.81L8.03 8.03a.75.75 0 0 1-1.06-1.06l4.5-4.5ZM3 15.75a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
