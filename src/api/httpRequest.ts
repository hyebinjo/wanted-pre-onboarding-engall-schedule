import { AxiosInstance } from 'axios';

export class HttpRequest {
  constructor(private readonly service: AxiosInstance) {
    this.service = service;
  }
  async get(url: string) {
    try {
      const response = await this.service.get(url);
      return response.data;
    } catch (error) {
      this.error(error);
    }
  }
  error(error: any) {
    throw new Error(`Service Error Status Code : < ${error.response.status} > `, error);
  }
}
