export function authVerify() {
    const user = JSON.parse(localStorage.getItem('user'));

    if ( user ) {
        return {
            user,
            login: true
        }
    }

    return {
        user: null,
        login: false
    }
}

export function usersVerify( arrayUsers = [], user = '' ) {
    let id = 0;
    let flag = false;
    
    arrayUsers.forEach(element => {
        if ( element.nombre === user ) {
            id = element.id;
            flag = true;
        }
    });

    return {
        id,
        flag
    }
}
