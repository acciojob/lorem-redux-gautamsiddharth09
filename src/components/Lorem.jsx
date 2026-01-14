import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLorem } from "../features/loremSlice";

const Lorem = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, data } = useSelector((state) => state.lorem);

  useEffect(() => {
    dispatch(fetchLorem());
  }, [dispatch]);

  if (isLoading)
    return <h4>Title :Loading tiltes</h4>; // exactly matches Cypress

  if (isError) return <h4>Error loading data!</h4>;

  return (
    <div>
      {data && (
        <ul>
          <li>
            <h4 className="title">Title :{data.title}</h4> {/* Cypress expects "Title :" */}
            <p className="body">{data.body}</p>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Lorem;
