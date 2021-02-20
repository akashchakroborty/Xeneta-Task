/* eslint-disable */
import moxios from 'moxios';
import { RestClient, HttpMethods } from '../restClient';

describe('should test Rest Client', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should check status 200 OK.', async () => {
    const mockOptions = { method: HttpMethods.get, url: 'https://mock-domain.com/' };
    const data = {
      content: [
        {
          mockProperty: '',
        },
      ],
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: data,
      });
    });

    const response = await RestClient(mockOptions);
    expect(response.status).toEqual(200);
    expect(response.data).toEqual(data);
  });

  it('should reject 400 Not Found.', async () => {
    const mockOptions = { method: HttpMethods.get, url: 'https://mock-domain.com/' };
    const data = {
      error: 'Not Found',
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: data,
      });
    });

    await expect(RestClient(mockOptions)).rejects.toThrow(Error);
  });

  it('should reject on invalid status range.', async () => {
    const mockOptions = { method: HttpMethods.get, url: 'https://mock-domain.com/' };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 504,
      });
    });
    await expect(RestClient(mockOptions)).rejects.toThrow(Error);
  });
});
