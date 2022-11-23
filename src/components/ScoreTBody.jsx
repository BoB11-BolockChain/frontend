const ScoreTBody = ({ data, setModalState }) => {
  return (
    <tbody>
      {data.map((data) => (
        <tr>
          <td>{data.num}</td>
          <td
            id="id"
            onClick={() => setModalState({ data: data, isOpen: true })}
          >
            {data.id}
          </td>
          <td>{data.score}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default ScoreTBody;
