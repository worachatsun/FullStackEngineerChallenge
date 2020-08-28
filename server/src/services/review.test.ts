import ReviewService from './review';

describe('ReviewService', () => {
  describe('Review service', () => {
    it('should map review', async () => {
      const reviewService = new ReviewService();
      const reviews = reviewService.mapReview('test', ['test1', 'test2']);
      const result = [
        { reviewTo: 'test', reviewBy: 'test1' },
        { reviewTo: 'test', reviewBy: 'test2' },
      ];
      expect(reviews).toEqual(result);
    });
  });
});
