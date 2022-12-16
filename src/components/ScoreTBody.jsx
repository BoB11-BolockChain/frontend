const ScoreTBody = ({ data, setModalState, img }) => {
  const loadImg = (user) => {
    try {
      return require(`src/assets/${user}.png`);
    } catch (error) {
      return img;
    }
  };
  return (
    <tbody>
      {data.map((data, i) => (
        <tr
          key={i}
          onClick={() => setModalState({ data: data, isOpen: true, img: img })}
        >
          <td>{i + 1}</td>
          <td>
            <img src={loadImg(data.id)} height="30px" />
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
