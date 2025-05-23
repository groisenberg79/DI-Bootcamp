const { database } = require('../config/database.js');

const queryAllUsers = () => {
    return database('users')
        .select();
}

const queryUserById = (id) => {
    return database('users')
        .select()
        .where('user_id', id);
}

const updateQuery = (id, email, username, first_name, last_name) => {
    return database('users')
        .where('user_id', id)
        .update({
            email: email, 
            username: username, 
            first_name: first_name, 
            last_name: last_name
        }, ['user_id']);
}

const queryUserByUsername = (username) => {
    return database('hashpwd')
        .select('password')
        .where('username', username);
};

const saveUserWithTransaction = async (transaction, username, email, first_name, last_name) => {
    return transaction('users').insert({
        username: username,
        email: email,
        first_name: first_name,
        last_name: last_name
    });
};

const saveHashedPasswordWithTransaction = async (transaction, username, hashedPassword) => {
    return transaction('hashpwd').insert({
        username: username,
        password: hashedPassword
    });
};

module.exports = { 
    queryAllUsers,
    queryUserById,
    updateQuery,
    saveUserWithTransaction,
    saveHashedPasswordWithTransaction,
    queryUserByUsername,
};
