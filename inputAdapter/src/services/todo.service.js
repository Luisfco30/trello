import Api from '../utils/axiosClient';

export class ServiceToDo {

    /**
     * @returns import('axios').AxiosResponse
     */
    static async getToDo() {
        try {
            
            const response = await Api.get(
                'todos',
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )

            return response;

        } catch (error) {
            return {
                status: 500,
                error: 'Bad Request'
            }
        }
    }
    static async createToDo(data) {
        try {
            console.log(data);
            const response = await Api.post(
                'todos',
                {   
                    Descripcion: data.Description,
                    idStatus: 1,
                    idUser: data.User,
                    Fecha: data.Date
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )

            return response;

        } catch (error) {
            return {
                status: 500,
                error: 'Bad Request'
            }
        }
    }
    static async updateToDo(data) {
        try {
            console.log(data.User);
            const response = await Api.put(
                'todos/'+data.id,
                {   
                    Descripcion: data.Description,
                    idStatus: data.idStatus,
                    idUser: data.User,
                    Fecha: data.Date  
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )

            return response;

        } catch (error) {
            return {
                status: 500,
                error: 'Bad Request'
            }
        }
    }
    static async deleteToDo(id) {
        try {
            
            const response = await Api.delete(
                'todos/'+id,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )

            return response;

        } catch (error) {
            return {
                status: 500,
                error: 'Bad Request'
            }
        }
    }

}