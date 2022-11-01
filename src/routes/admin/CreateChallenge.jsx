const CreateChallenge = () => {
  return (
    <>
      <p className="text-2xl pt-4 pb-4">Create Challenge</p>
      <div className="p-2 flex flex-col gap-2 rounded-lg border-2 border-grey-300">
        <p>add attack</p>
        <input
          type="text"
          placeholder="name"
          className="h-10 p-2 rounded-lg border-2 border-pdxf-pink"
        />
        <textarea
          type="text"
          placeholder="desc"
          className="h-32 p-2 rounded-lg border-2 border-pdxf-pink"
        />
        <button className="rounded-lg">add</button>
      </div>
    </>
  );
};

export default CreateChallenge;
