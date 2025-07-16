import { FC } from "react";
import { Anchor, Button, Modal, Paper, Text } from "@mantine/core";
import classes from "./styles.module.css";

type TTodoDeleteModal = {
  opened: boolean;
  onClose: () => void;
  deleteHandler: () => void;
  todoLabel?: string;
};

const TodoDeleteModal: FC<TTodoDeleteModal> = ({
  todoLabel,
  opened,
  onClose,
  deleteHandler,
}) => {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={<strong>Удаление записи</strong>}
      centered
    >
      <Paper withBorder p={10}>
        <Text>Подтвердите удаление записи:</Text>
        <Text>{todoLabel && <strong>"{todoLabel}"</strong>}</Text>
      </Paper>

      <div className={classes.buttons}>
        <Anchor onClick={onClose} underline="never">Отменить</Anchor>
        <Button variant="filled" color="red" onClick={deleteHandler} m={0}>
          Удалить
        </Button>
      </div>
    </Modal>
  );
};

export default TodoDeleteModal;
