const DropDownStage = () => {
  return (
    <>
      <div className="bg-[#29294e] w-24 text-center  absolute -right-10 top-0 z-50 rounded-lg shadow-2xl">
        <div className="hover:bg-[#3f37c9] rounded-lg p-2">
          <h1 className="text-white">Edit</h1>
        </div>
        <div className=" hover:bg-[#3f37c9] rounded-lg p-2">
          <h1 className="text-red-500">Delete</h1>
        </div>
      </div>
    </>
  );
};

export default DropDownStage;
