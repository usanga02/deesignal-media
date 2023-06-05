import { HOST, configuration } from '../utils/constants'
import axios from 'axios'

export class AppService {


    public async getBlogs(): Promise<any> {
        try {
            const response = await axios.get(`${HOST}/blog`, configuration);
            return response.data;
        } catch (error) {
            return { status: 0, errorMsg: error }
        }

    }

    // public async addUser(user: any) {
    //     const response = await fetch(`/api/user`, {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ user })
    //     })
    //     return await response.json();
    // }

}