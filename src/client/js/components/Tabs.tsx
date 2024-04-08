
import React, { useContext } from 'react'
import Context from '../context/Context';
import type { IState } from '../types/App.types.d.ts'

const Tabs = ():JSX.Element => {
  // User sets here whether they are viewing users, parcs, or bookings
  const { activeEntity, activeEntities, setActiveEntity } = useContext(Context);

  return (
    <ul className="tabs">
      { activeEntities.map((entity: IState['activeEntity']) => (
        <li key={entity}>
          <button className={`btn ${entity === activeEntity ? 'btn--active' : ''}`} onClick={() => setActiveEntity(entity)}>{entity}</button>
        </li>
      ))  
      }
    </ul>
  );
}

export default Tabs