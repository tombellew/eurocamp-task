import type { IEntity, IState } from '../types/App.types.d.ts'
import axios from 'axios';

// @todo - add createEntity function
// @todo - add updateEntity function
// @todo - Add return types to functions 

export const fetchEntities = async (entity: IState['activeEntity']) => {
  const response = await axios.get(`http://localhost:3001/api/1/${entity}`).catch((error) => {
    return error.message
  }).then((response) => {
    return response.data
  })

  return response
}

export const deleteEntity = async (entity: IState['activeEntity'], id: IEntity['id']) => {
  const response = await axios.delete(`http://localhost:3001/api/1/${entity}/${id}`);
  // @todo - confirmation message
  // @todo - add error handling

  switch (response.status) {
    case 200:
      return response.data
    
    default:
      console.error(response)
  }
}
