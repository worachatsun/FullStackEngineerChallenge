import AuthService from './auth';
import { compareSync } from 'bcrypt';

describe('ActionService', () => {
  describe('Action service', () => {
    it('should create hash password from raw', async () => {
      const actionService = new AuthService();
      const hash = actionService.passwordGenerator('test');

      expect(compareSync('test', hash)).toBe(true);
    });
  });
});
