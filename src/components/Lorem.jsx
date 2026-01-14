import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLorem } from "../features/loremSlice";

const Lorem = () => {
  const dispatch = useDispatch();
  const { isLoading, data } = useSelector((state) => state.lorem);

  useEffect(() => {
    dispatch(fetchLorem());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {data && (
        <p>
          <strong>{data.title}</strong>
          <br />
          {data.body}
        </p>
      )}
    </div>
  );
};

export default Lorem;
