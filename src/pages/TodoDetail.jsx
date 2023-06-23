import React from "react";
import { useParams } from "react-router-dom";

const TodoDetail = () => {
  let { id } = useParams();

  return <div>TodoDetail</div>;
};

export default TodoDetail;
