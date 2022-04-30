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
          <div className="Ob1">
            <ObstacleOne/>
          </div>
        </div>
        <BuildingTop/>
      </div>
      <div className="BTone">
        <div className='Obstacle2' style={{height: "100px", width: "90px"}}>
          <div className="Ob2">
            <ObstacleTwo/>
          </div>
        </div>
        <BuildingTop/>
      </div> 
      <div className="BTone">
        <div className='Obstacle3' style={{height: "100px", width: "90px"}}>
          <div className='Ob3'>
            <ObstacleThree/>
          </div>
        </div>
        <BuildingTop/>
      </div> 
      <div className="BTone">
        <BuildingTop/>
      </div>  
    </div> 
  )
}

export default PlayBuilding;