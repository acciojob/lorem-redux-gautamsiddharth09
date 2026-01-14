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

  if (isLoading)
    return (
      <h4>
        Below Contains A title and Body gotten froma random API, Please take your
        time to Review
      </h4>
    );
  if (isError) return <h4>Error loading data!</h4>;

  return (
    <div>
      {data && (
        <ul>
          <li>
            <h4 className="title">{data.title}</h4>
            <p className="body">{data.body}</p>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Lorem;
