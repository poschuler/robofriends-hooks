import React, { useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import { setSearchField } from '../store/searchRobotsSlice';
import { fetchRobots } from '../store/requestRobotsSlice';

function App() {
  const dispatch = useDispatch();

  const robots = useSelector((state) => {
    return state.requestRobots.robots;
  });
  const searchField = useSelector((state) => {
    return state.searchRobots.searchField;
  });
  //console.log(searchField);

  const onSearchChange = (event) => {
    //console.log(event.target.value);
    dispatch(setSearchField(event.target.value));
  };

  useEffect(() => {
    dispatch(fetchRobots());
  }, [dispatch]);

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  if (!robots.length) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="tc">
      <h1 className="f2">RoboFriends</h1>
      {/* <button onClick={() => setCount(count + 1)}>Click Me!</button> */}
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredRobots} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
}

export default App;
