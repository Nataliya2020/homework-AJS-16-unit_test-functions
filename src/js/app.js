import returnHealthStatus from './health';

const statusHealth = returnHealthStatus({ name: 'Маг', health: 90 });

const health = document.getElementById('health');
health.classList.add(statusHealth);
