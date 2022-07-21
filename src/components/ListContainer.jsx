import React, { useEffect, useState } from "react";
import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import { useTracker } from "../contexts/TrackerContext";
import {
  colorType,
  combineArr,
  groupByDate,
  groupByType,
  lastIndex,
} from "../services/tracker";
import EditTracker from "./EditTracker";
import DeleteTracker from "./DeleteTracker";
import SelectUI from "../ui/SelectUI";

function ListContainer() {
  const { getAllTracker, tracker } = useTracker();
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("ALL");

  useEffect(() => {
    const fetchAllTracker = async () => {
      try {
        await getAllTracker();
      } catch (err) {}
    };
    fetchAllTracker();
  }, []);

  const trackerList = combineArr(tracker?.allExpense, tracker?.allIncome);

  const groupByType = (() => {
    if (type === "ALL") {
      return groupByDate(trackerList);
    } else if (type === "EXPENSE") {
      return groupByDate(tracker?.allExpense);
    } else if (type === "INCOME") {
      return groupByDate(tracker?.allIncome);
    }
  })();

  return (
    <>
      {/* <Box>
        <SelectUI />
      </Box> */}

      {groupByType?.map((groupDate) => (
        <List
          sx={{
            marginTop: "2rem",
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
            marginLeft: { xs: "0", sm: "100px" },
          }}
        >
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            sx={{
              fontSize: "1.8rem",
              color: "primary.main",
            }}
          >
            {groupDate.date}
          </ListSubheader>

          {groupDate?.groupDate.map((el, idx) => (
            <Box key={idx}>
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary={
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="gray"
                      fontSize="1.5rem"
                    >
                      {el.itemName}
                    </Typography>
                  }
                  secondary={
                    <>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color={colorType(el.type)}
                        fontSize="1.2rem"
                      >
                        {el.amount} ฿
                      </Typography>
                    </>
                  }
                />
                <EditTracker idx={idx} el={el} />m
                <DeleteTracker id={el?.id} type={el?.type} />
              </ListItem>
              <Divider sx={{ display: lastIndex(groupDate?.groupDate, idx) }} />
            </Box>
          ))}
        </List>
      ))}
    </>
  );
}

export default ListContainer;
