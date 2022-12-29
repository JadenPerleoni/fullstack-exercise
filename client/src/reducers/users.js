export default (users = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return users;
        case 'CREATE':
            return users;
    
        default:
            return users;
    }
}
