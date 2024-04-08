import React, { useEffect, useState, useContext } from 'react'
import Context from '../context/Context'
import type { IParc, IUser, IBooking } from '../types/App.types.d.ts'
import { fetchEntities, deleteEntity } from '../data/api.tsx'

const List = () => {
  // List for users, parcs, and bookings
  // user/parcs/bookings are focused by the user in Tabs.tsx
  const { activeEntity } = useContext(Context);
  const [entries, setEntries] = useState([] as IUser[] | IParc[] | IBooking[])
  const [error, setError] = useState('' as string)

  async function fetchData() {
    const response = await fetchEntities(activeEntity)
    if (typeof response === 'string') {
      setError(response )
      return
    } else {
      setEntries(response.data as IUser[] | IParc[] | IBooking[])
    }
  }

  useEffect(() => {
    fetchData()
  }, [activeEntity])

  return (
    <>
      <h2>{activeEntity}</h2>
      {/* @todo - add create forms here */}
      {/* @todo - add search and filtering here */}
      {error ? <p>{error}, please try again or contact support at support@example.com</p> : ''}

      {/* @todo - break these tables into separate components */}
      <table className='table'>
        { activeEntity === 'users' ? 
        <>
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Email</th>
          </tr>
        </thead>
        <tbody>
          { (entries as IUser[]).map((user: IUser) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button className='btn'
                    onClick={async () => {
                      await deleteEntity(activeEntity, user.id)
                      fetchData()
                    }}
                  >Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
        </>
        : '' }

        {activeEntity === 'parcs' ?
          <>
            <thead>
              <tr>
                <th>ID</th><th>Name</th><th>Email</th>
              </tr>
            </thead>
            <tbody>
              {(entries as IParc[]).map((parc: IParc) => {
                return (
                  <tr key={parc.id}>
                    <td>{parc.id}</td>
                    <td>{parc.name}</td>
                    <td>{parc.description}</td>
                    <td>
                      <button className='btn'
                      onClick={async () => {
                        await deleteEntity(activeEntity, parc.id)
                        fetchData()
                      }}
                      >Delete</button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </>
          : ''}

        {activeEntity === 'bookings' ?
          <>
            <thead>
              <tr>
                <th>ID</th><th>User</th><th>Parc</th><th>Date</th><th>Comments</th>
              </tr>
            </thead>
            <tbody>
              {(entries as IBooking[]).map((booking: IBooking) => {
                return (
                  <tr key={booking.id}>
                    <td>{booking.id}</td>
                    <td>{booking.user}</td>
                    <td>{booking.parc}</td>
                    <td>{new Date(booking.bookingdate).toString()}</td>
                    <td>{booking.comments}</td>
                    <td>
                      <button className='btn'
                        onClick={async () => {
                          await deleteEntity(activeEntity, booking.id)
                          fetchData()
                        }}
                      >Delete</button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </>
          : ''}
        
      </table>
    </>
  )
}

export default List