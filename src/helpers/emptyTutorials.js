import React, { useState } from "react";
import { Empty, Button, Col } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import NewTutorial from "../components/Tutorials/NewTutorial";
import EmptySVG from "../assets/images/empty.svg";

const EmptyTutorials = ({ org, orgHandle }) => {
  const [visibleModal, setVisibleModal] = useState(false);
  return (
    <Col xs={24}>
      <Empty
        image={EmptySVG}
        imageStyle={{
          height: 60,
        }}
        description={<span>{org} has no CodeLabz yet</span>}
      >
        <Button onClick={() => setVisibleModal(true)} type="primary">
          <PlusOutlined /> Add New CodeLabz
        </Button>
      </Empty>
      <NewTutorial
        viewModal={visibleModal}
        viewCallback={() => setVisibleModal(false)}
        active={orgHandle}
      />
    </Col>
  );
};

export default EmptyTutorials;
