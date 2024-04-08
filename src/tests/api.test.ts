import { expect, test } from '@jest/globals';
import { fetchEntities, deleteEntity } from '../client/js/data/api';
import { IBooking, IParc, IUser } from '../client/js/types/App.types';

test('Users list can be retrieved', async () => {
  const entity = await fetchEntities('users');
  const user = entity.data[0] as IUser;
  expect(user.name).toBeDefined();
});

test('Parcs list can be retrieved', async () => {
  const entity = await fetchEntities('parcs');
  const parc = entity.data[0] as IParc;
  expect(parc.description).toBeDefined();
});

test('Bookings list can be retrieved', async () => {
  const entity = await fetchEntities('bookings');
  const booking = entity.data[0] as IBooking;
  expect(booking.user).toBeDefined();
});

test('User can be deleted', async () => {
  const entity = await fetchEntities('users');
  const id = entity.data[0].id;
  await deleteEntity('users', id);
  const entityAfterDeletion = await fetchEntities('users');
  const isFound = entityAfterDeletion.data.find((user: IUser) => user.id === id);
  expect(isFound).toBeUndefined();
});

// @todo Add same deletion tests for parcs and bookings

// @todo Add test for error handling