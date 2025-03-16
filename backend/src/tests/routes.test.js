const request = require('supertest');
const app = require('../app');

describe('Auth Routes', () => {
    it('should return a 200 status code when logging in with valid credentials', async () => {
        const response = await request(app)
            .post('/login')
            .send({
                username: 'testuser',
                password: 'testpassword'
            });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('token');
    });

    it('should return a 401 status code when logging in with invalid credentials', async () => {
        const response = await request(app)
            .post('/login')
            .send({
                username: 'invaliduser',
                password: 'invalidpassword'
            });

        expect(response.status).toBe(401);
        expect(response.body).toHaveProperty('error');
    });

    // Add more test cases for other auth routes as needed
});
