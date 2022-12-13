const ScoreTBody = ({ data, setModalState, img }) => {
  return (
    <tbody>
      {data.map((data) => (
        <tr
          onClick={() => setModalState({ data: data, isOpen: true, img: img })}
        >
          <td>{data.num}</td>
          <td>
            <img src={img} height="30px" />
          </td>
          <td id="id">{data.id}</td>
          <td></td>
          <td>{data.score}</td>
          <td></td>
        </tr>
      ))}
    </tbody>
  );
};

export default ScoreTBody;
