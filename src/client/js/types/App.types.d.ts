
export interface IUser extends IEntity {
  name: string
  email: string
}

export interface IParc extends IEntity {
  name: string
  description: string
}

export interface IBooking extends IEntity {
  user: string
  parc: string
  bookingdate: string
  comments: string
}

export interface IEntity {
  id: string
}

export interface IStateProps {
  children: React.ReactNode
}

export interface IState {
  activeEntity: 'users' | 'parcs' | 'bookings'
  activeEntities: ['users', 'parcs', 'bookings']
  setActiveEntity: (activeEntity: IState['activeEntity']) => void
}