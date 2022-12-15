const ScoreTBody = ({ data, setModalState, img }) => {
  return (
    <tbody>
      {data.map((data, i) => (
        <tr
          key={i}
          onClick={() => setModalState({ data: data, isOpen: true, img: img })}
        >
          <td>{data.num}</td>
          <td>
            <img src={img} height="30px" />
          </td>
          <td id="id">{data.id}</td>
          <td>{data.org}</td>
          <td>{data.comment}</td>
          <td>{data.score}</td>
          <td>{data.IR}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default ScoreTBody;
