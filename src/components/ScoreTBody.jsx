const ScoreTBody = ({ data, setModalState, img }) => {
  return (
    <tbody>
      {data.map((data, i) => (
        <tr
          key={i}
          onClick={() => setModalState({ data: data, isOpen: true, img: img })}
        >
          <td>{i + 1}</td>
          <td>
            <img
              src={process.env.PUBLIC_URL + `/Profile/${data.id}.png`}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src = img;
              }}
              alt="userimg"
              className="roundprofile"
              width="30px"
              height="30px"
            />
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
