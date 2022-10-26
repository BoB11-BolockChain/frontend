import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Collapse,
  Divider,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Layout from "src/components/Layout/Layout";

const CreateChallenge = () => {
  const dummy = [
    {
      id: "ididididid",
      name: "attackanem",
      payload: "payloddadadad",
    },
    {
      id: "fdsadidid",
      name: "whoareyou",
      payload: "whothehellareyou",
    },
    {
      id: "fdsafkdididid",
      name: "ultrapowerhsell",
      payload: "beautifulgirlmuscle",
    },
  ];

  const [expanded, setExpanded] = useState({});
  const handleExpand = (id) => {
    setExpanded({ ...expanded, [id]: !expanded[id] });
  };

  return (
    <Layout>
      <Typography variant="h3">Create Challenge</Typography>
      <Divider />
      <Stack spacing={2} mt={2}>
        <Box sx={{ border: "1px solid red", borderRadius: 2, padding: 1 }}>
          <Typography variant="h4" sx={{ m: 1 }}>
            Add attack sequence
          </Typography>
          <TextField label="Attack Name" fullWidth sx={{ m: 1 }} />
          <TextField
            multiline
            label="Payload"
            rows={3}
            fullWidth
            sx={{ m: 1 }}
          />
          <Button variant="contained">Create</Button>
        </Box>
        <Box sx={{ border: "1px solid red", borderRadius: 2, padding: 1 }}>
          <Typography variant="h4" sx={{ m: 1 }}>
            Attack Sequence
          </Typography>
          <Stack spacing={2}>
            {dummy.map((d, i) => (
              <Box>
                <Stack direction="row">
                  <Avatar
                    variant="rounded"
                    sx={{ bgcolor: d.status === 0 ? "green" : "red" }}
                  >
                    {i}
                  </Avatar>
                  <Typography>{d.name}</Typography>
                  <IconButton onClick={() => handleExpand(d.id)}>
                    {expanded[d.id] ? (
                      <KeyboardArrowUp />
                    ) : (
                      <KeyboardArrowDown />
                    )}
                  </IconButton>
                </Stack>
                <Collapse in={expanded[d.id]} unmountOnExit>
                  <Typography>{d.payload}</Typography>
                </Collapse>
              </Box>
            ))}
          </Stack>
        </Box>
      </Stack>
    </Layout>
  );
};

export default CreateChallenge;
