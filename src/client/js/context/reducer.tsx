
import type { IState } from '../types/App.types.d.ts'

export default (state: IState, action: any) => {
  switch (action.type) {
    case 'SET_ACTIVE_ENTITY':
      return {
        ...state as IState,
        activeEntity: action.payload
      };

    default:
      return state;
  }
};
