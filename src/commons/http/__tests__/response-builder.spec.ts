import { getMockRes } from '@jest-mock/express';
import { HttpStatus } from '@nestjs/common';
import {
  createdResponse,
  emptyOrSuccessResponse,
  emptyResponse,
  successResponse,
} from '../response-builder';

const { res: response } = getMockRes();

const mockResult = {
  id: 'abc-123',
  name: 'mocked name',
};

describe('ResponseBuilder | UnitTest', () => {
  describe('when building successful response', () => {
    beforeEach(() => successResponse(response, mockResult));

    it('returns http status 200', () => {
      expect(response.status).toHaveBeenCalledTimes(1);
      expect(response.status).toHaveBeenCalledWith(HttpStatus.OK);
    });

    it('returns sends result as json', () => {
      expect(response.json).toHaveBeenCalledTimes(2);
      expect(response.json).toHaveBeenCalledWith(mockResult);
    });
  });

  describe('when building empty or success response', () => {
    describe('and the response is not empty', () => {
      beforeEach(() => emptyOrSuccessResponse(response, mockResult));

      it('returns http status 200', () => {
        expect(response.status).toHaveBeenCalledTimes(3);
        expect(response.status).toHaveBeenCalledWith(HttpStatus.OK);
      });

      it('returns sends result as json', () => {
        expect(response.json).toHaveBeenCalledTimes(4);
        expect(response.json).toHaveBeenCalledWith(mockResult);
      });
    });
  });
});
