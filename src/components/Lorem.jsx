// src/components/Lorem.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLorem } from "../features/loremSlice";

const Lorem = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, data } = useSelector((state) => state.lorem);

  useEffect(() => {
    dispatch(fetchLorem());
  }, [dispatch]);

  if (isLoading) return <h4>Loading...</h4>;
  if (isError) return <h4>Error loading data!</h4>;

  return (
    <div>
      {data && (
        <ul>
          <li>
            <h4>{data.title}</h4>
            <p>{data.body}</p>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Lorem;
