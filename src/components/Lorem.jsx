import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLorem } from "../features/loremSlice";

const Lorem = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, data } = useSelector((state) => state.lorem);

  useEffect(() => {
    dispatch(fetchLorem());
  }, []);

  // INTRO TEXT
  if (!data && !isLoading) {
    return (
      <h4>
        Below Contains A title and Body gotten froma random API, Please take your
        time to Review
      </h4>
    );
  }

  // LOADING
  if (isLoading) {
    return <h4>Loading...</h4>;
  }

  // ERROR
  if (isError) {
    return <h4>Error loading data!</h4>;
  }

  // SUCCESS
  return (
    <div>
      <h4 className="title">
        Title :{data.title}
      </h4>
      <ul>
        <li>{data.body}</li>
      </ul>
    </div>
  );
};

export default Lorem;
