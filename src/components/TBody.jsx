import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";

const TBody = ({ data, setModalState, handleRemove, admin }) => {
  return (
    <tbody>
      {data.map((data) => (
        <tr key={data.title}>
          <td>{data.num}</td>
          <td
            id="title"
            onClick={() => setModalState({ data: data, isOpen: true })}
          >
            {data.title}
          </td>
          <td>{data.author}</td>
          <td>{data.cdate}</td>
          <td>{data.views}</td>
          {admin === 1 && (
            <>
              <td
                className="icon"
                onClick={() =>
                  setModalState({ data: data, isOpen: true, ceState: "edit" })
                }
              >
                <FaRegEdit />
              </td>
              <td className="icon" onClick={() => handleRemove(data)}>
                <FaRegTrashAlt />
              </td>
            </>
          )}
        </tr>
      ))}
    </tbody>
  );
};

export default TBody;
