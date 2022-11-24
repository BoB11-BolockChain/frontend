import { Link, useParams } from "react-router-dom";

import "./styles.scss";

const dummy = [
  { userName: "chang", state: "idle" },
  { userName: "sung", state: "challenging scenario 2" },
  { userName: "jeong", state: "analyzing scenario 3" },
  { userName: "chan", state: "analyzing scenario 4" },
  { userName: "hyun", state: "challenging scenario 5" },
];

const Dashboard = () => {
  const { userId, scenarioId } = useParams();
  // const msg = useWebSocket("ws://www.pdxf.tk:8000/dashboard");
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   if (msg) {
  //     const json = JSON.parse(msg);
  //     setData(json.data);
  //     console.log(msg);
  //   }
  // }, [msg]);

  return (
    <>
      <p className="title">Dashboard</p>
      <div className="x-overflow">
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>username</th>
              <th>current state</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {dummy.map((d) => (
              <tr className="tritem" key={d.userName}>
                <th>{d.userName}</th>
                <td>{d.state}</td>
                <td>
                  <Link to={`/admin/dashboard/${d.userName}`}>See More</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;

{
  /* <>
<Typography variant="h3">Dashboard</Typography>
<Box
  sx={{
    m: 4,
    border: "2px solid grey",
    "border-radius": "15px",
    backgroundColor: "white",
  }}
>
  <Table>
    <TableHead>
      <TableCell style={{ width: 50 }}></TableCell>
      <TableCell>name</TableCell>
      <TableCell>time</TableCell>
      <TableCell>scenario</TableCell>
      <TableCell>progress</TableCell>
    </TableHead>
    <TableBody>
      {dummy.map((d) => (
        <TableRow hover key={d.id} onClick={() => onClick(d.id)}>
          <TableCell>
            <Avatar>
              <Folder />
            </Avatar>
          </TableCell>
          <TableCell>{d.userName}</TableCell>
          <TableCell>{d.time}</TableCell>
          <TableCell>{d.scenario}</TableCell>
          <TableCell>{d.progress}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</Box>
</> */
}
