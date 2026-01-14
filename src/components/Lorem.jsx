import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLorem } from "../features/loremSlice";

const Lorem = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, data } = useSelector((state) => state.lorem);

  useEffect(() => {
    dispatch(fetchLorem());
  }, [dispatch]);

 
  if (!isLoading && !data) {
    return (
      <p>
        Below Contains A title and Body gotten froma random API, Please take your
        time to Review
      </p>
    );
  }

  
  if (isLoading) {
    return <h4>Title :Loading tiltes</h4>;
  }

  if (isError) {
    return <h4>Error loading data!</h4>;
  }

  
  return (
    <div>
      <h4 className="title">Title :{data.title}</h4>
      <p className="body">Body :{data.body}</p>
    </div>
  );
};

export default Lorem;
