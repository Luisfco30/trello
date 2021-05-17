import Api from '../utils/axiosClient';

export class ServiceUser {

    static async getUsers() {
        try {
            
            const response = await Api.get(
                'persons',
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )

            console.log(response);

            return response;

        } catch (error) {
            return {
                status: 500,
                error: 'Bad Request'
            }
        }
    }

    static async updateUsers(data) {
        try {
            
            const response = await Api.put(
                'persons/' + data.id,
                {
                    Nombre: data.Nombre,
                    idRol: 1
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

    static async deleteUser(id) {
        try {
            
            const response = await Api.delete(
                'persons/' + id,
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

    static async createUser(data) {
        try {
            
            const response = await Api.post(
                'persons',
                {
                    Nombre: data.Nombre,
                    idRol: 1
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

    static async loginUser(id) {
        try {
            
            const response = await Api.get(
                `persons/${id}`,
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
