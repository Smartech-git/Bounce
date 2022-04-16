import React from 'react';
import BuildingTop from './Characters/BuildingTop';
import ObstacleOne from './Characters/scenes/ObstacleOne';
import ObstacleTwo from './Characters/scenes/ObstacleTwo';
import ObstacleThree from './Characters/scenes/ObstacleThree';
import './PlayBuilding.css';

function PlayBuilding () {

  return (
    <div className='PlayBuilding'>
      <div className="BTone">
        <ObstacleOne/>
        <BuildingTop/>
      </div> 
      <div className="BTone">
        <ObstacleTwo/>
        <BuildingTop/>
      </div> 
      <div className="BTone">
        <ObstacleThree/>
        <BuildingTop/>
      </div> 
      <div className="BTone">
        <BuildingTop/>
      </div>  
    </div> 
  )
}

export default PlayBuilding;