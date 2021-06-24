import returnHealthStatus from '../health';

test('min', () => {
  const result = returnHealthStatus({ name: 'Маг', health: 15 });

  expect(result).toBe('wounded');
});

test('max', () => {
  const result = returnHealthStatus({ name: 'Маг', health: 50 });

  expect(result).toBe('wounded');
});

test('more than max', () => {
  const result = returnHealthStatus({ name: 'Маг', health: 51 });

  expect(result).toBe('healthy');
});

test('between min and max', () => {
  const result = returnHealthStatus({ name: 'Маг', health: 30 });

  expect(result).toBe('wounded');
});

test('less min', () => {
  const result = returnHealthStatus({ name: 'Маг', health: 14 });

  expect(result).toBe('critical');
});
