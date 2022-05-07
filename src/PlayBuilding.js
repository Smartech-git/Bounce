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
        <div className='Obstacle1' style={{height: "100px", width: "90px"}}>
          <ObstacleOne/>
        </div>
        <BuildingTop/>
      </div>
      <div className="BTone fix_positionOne">
        <div className='Obstacle2' style={{height: "100px", width: "90px"}}>
          <ObstacleTwo/>
        </div>
        <BuildingTop/>
      </div> 
      <div className="BTone fix_positionTwo">
        <div className='Obstacle3' style={{height: "100px", width: "90px"}}>
          <ObstacleThree/>
        </div>
        <BuildingTop/>
      </div> 
      <div className="BTone fix_positionThree">
        <BuildingTop/>
      </div>  
    </div> 
  )
}

export default PlayBuilding;