import { AxiosInstance } from 'axios';

export class HttpRequest {
  constructor(private readonly service: AxiosInstance) {
    this.service = service;
  }
  async get() {
    try {
      const response = await this.service.get('');
      return response.data;
    } catch (error) {
      this.error(error);
    }
  }

  async post(data: any) {
    try {
      this.service.post('/', data);
    } catch (error) {
      this.error(error);
    }
  }

  async delete(id: number) {
    try {
      this.service.delete(`/${id}`);
    } catch (error) {
      this.error(error);
    }
  }

  error(error: any) {
    throw new Error(`Service Error Status Code : < ${error.response.status} > `, error);
  }
}
