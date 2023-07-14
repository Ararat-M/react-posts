import axios from "axios";

export default class PostService {
  static async getAll(limit: number = 10, page: number = 1) {
    const response = await axios("https://jsonplaceholder.typicode.com/posts", {
      params: {
        _limit: limit,
        _page: page
      }
    });
    
    return response
  }

  static async getPostById(id: string | undefined) {
    const response = await axios("https://jsonplaceholder.typicode.com/posts/" + id);
    
    return response
  }

  static async getPostCommentsById(id: string | undefined) {
    const response = await axios(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    
    return response
  }
}