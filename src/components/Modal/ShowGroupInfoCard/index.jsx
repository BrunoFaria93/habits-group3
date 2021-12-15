import { Container } from "./styles";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { IoMdAddCircleOutline } from "react-icons/io";
import HabitCard from "../../HabitCard";
import ActivitiesCard from "../../ActivitiesCard";
import { useEffect, useState } from "react";
import { Box, Modal, Tooltip } from "@mui/material";
import AddHabitModal from "../addHabit";

const ShowGroupInfoCard = ({
  groupName,
  info,
  users = false,
  goals = false,
  activities = false,
  handleClose,
  group,
}) => {
  const showUsers = info.map((user) => (
    <li key={user.id}>
      <h5>Usuário: {user.username}</h5>
      <p>Email: {user.email}</p>
    </li>
  ));

  const showGoals =
    goals &&
    info
      .sort((a, b) => a.id - b.id)
      .map((goal) => <HabitCard habit={goal} group={true} key={goal.id} />);

  const showEvents =
    activities &&
    info.map((activity) => {
      return (
        <ActivitiesCard activity={activity} group={group} key={activity.id} />
      );
    });

  //Modal add group goal
  const [openAddHabit, setOpenAddHabit] = useState(false);
  const handleOpenAddHabit = () => setOpenAddHabit(true);
  const handleCloseAddHabit = () => setOpenAddHabit(false);

  useEffect(() => {}, [activities]);

  return (
    <>
      <Container>
        <header>
          <h3>Grupo: {groupName}</h3>
          <div>
            {goals && (
              <Tooltip title="Adicionar" arrow>
                <button onClick={handleOpenAddHabit}>
                  <IoMdAddCircleOutline />
                </button>
              </Tooltip>
            )}
            <Tooltip title="Sair" arrow>
              <button onClick={handleClose}>
                <AiOutlineCloseCircle />
              </button>
            </Tooltip>
          </div>
        </header>
        <hr />
        <ul>{users && showUsers}</ul>
        <ul>{goals && showGoals}</ul>
        <ul>{activities && showEvents}</ul>
      </Container>
      <Modal open={openAddHabit} onClose={handleOpenAddHabit}>
        <Box>
          <AddHabitModal handleCloseAddHabit={handleCloseAddHabit} />
        </Box>
      </Modal>
    </>
  );
};

export default ShowGroupInfoCard;
