import { HOST, configuration } from "../utils/constants";
import axios from "axios";

export class AppService {
  public async getBlogs(): Promise<any> {
    try {
      const response = await axios.get(`${HOST}/blog`, configuration);
      return response.data;
    } catch (error) {
      return { status: 0, errorMsg: error };
    }
  }

  public async getWorks(category: string): Promise<any> {
    try {
      const response = await axios.get(
        `${HOST}/works?category=${category}`,
        configuration
      );
      return response.data;
    } catch (error) {
      return { status: 0, errorMsg: error };
    }
  }
}
