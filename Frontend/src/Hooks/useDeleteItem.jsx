import React from "react";

import axios from "axios";
import { createToast } from "../Utils/createToast";
import { server, client } from "../Utils/server";

const useDeleteItem = (redirectTo) => {
  const deleteById = async function (id, type) {
    try {
      const resp = await axios.post(`${server}/admin/deleteItem`, {
        id,
        type,
      });
      createToast(resp.data.message, "success");
      window.location.href = `${client}${redirectTo}`;
    } catch (error) {
      console.log(error.response.data.message);
      createToast(error.response.data.message, "error");
    } finally {
    }
  };
  return {
    deleteById,
  };
};

export default useDeleteItem;
