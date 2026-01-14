import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLorem } from "../features/loremSlice";

const Lorem = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, data } = useSelector((state) => state.lorem);

  useEffect(() => {
    dispatch(fetchLorem());
  }, [dispatch]);

  // Intro text (shown before API resolves)
  if (!data && !isLoading) {
    return (
      <p>
        Below Contains A title and Body gotten froma random API, Please take your
        time to Review
      </p>
    );
  }

  // Loading state
  if (isLoading) {
    return <p>Loading...</p>;
  }

  // Error state
  if (isError) {
    return <p>Error loading data!</p>;
  }

  // Success state (MUST use li for Cypress)
  return (
    <ul>
      <li>Title :{data.title}</li>
      <li>Body :{data.body}</li>
    </ul>
  );
};

export default Lorem;
