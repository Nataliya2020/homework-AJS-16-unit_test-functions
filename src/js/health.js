export default function returnHealthStatus(obj) {
  let result = '';

  if (obj.health > 50) {
    result = 'healthy';
  }
  if (obj.health >= 15 && obj.health <= 50) {
    result = 'wounded';
  }
  if (obj.health < 15) {
    result = 'critical';
  }

  return result;
}
