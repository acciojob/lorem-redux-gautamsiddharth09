import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLorem } from "../features/loremSlice";

const Lorem = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, data, hasStarted } = useSelector(
    (state) => state.lorem
  );


useEffect(() => {
  const timer = setTimeout(() =>{
    dispatch(fetchLorem())
  }, 100);
  return () => clearInterval(timer);
}, [dispatch]);


  // INTRO FIRST
  if (!hasStarted) {
    return (
      <h4>
        Below Contains A title and Body gotten froma random API, Please take your
        time to Review
      </h4>
    );
  }

  // LOADING
  if (isLoading) {
    return (
      <ul>
        <li>
          <h4 className="title">Title :Loading titles</h4>
          <p className="body">Body :Loading Body</p>
        </li>
      </ul>
    );
  }

  // ERROR
  if (isError) {
    return <h4>Error loading data!</h4>;
  }
return (
  <div>
   
    <ul>
      {data.slice(0,3).map((post) => (
      <li key={post.id}>
         <h4 className="title">Title :{post.title}</h4>
         <p className="body">Body :{post.body} </p>
         </li>
         ))}
    </ul>
  </div>
);

};

export default Lorem;
