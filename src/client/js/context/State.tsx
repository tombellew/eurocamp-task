import React, { useReducer } from 'react';
import reducer from './reducer'
import Context from './Context'
import type { IStateProps, IState } from '../types/App.types.d.ts'

const State = (props: IStateProps): JSX.Element => {
  const initialState: IState = {
    activeEntity: 'users',
    activeEntities: ['users', 'parcs', 'bookings'],
    setActiveEntity: () => {}
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const setActiveEntity = (activeEntity: IState['activeEntity']) => {
    dispatch({
      type: 'SET_ACTIVE_ENTITY',
      payload: activeEntity
    });
  };

  return (
    <Context.Provider
      value={{
        activeEntity: state.activeEntity,
        activeEntities: state.activeEntities,
        setActiveEntity
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default State