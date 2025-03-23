const bcrypt = require('bcrypt');
const { database }= require('../config/database.js');
const {
    queryAllUsers,
    queryUserById,
    updateQuery,
    saveUserWithTransaction,
    saveHashedPasswordWithTransaction
} = require('../models/userQueries.js'); 

const { hashPassword } = require('../utils/hash');
const { queryUserByUsername } = require('../models/userQueries');

const showAllUsers = async (req, res) => {
    try {
        const all_users = await queryAllUsers();
        res.status(200).json(all_users);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

const showUserById = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await queryUserById(id);
        if ( user.length > 0) {
            res.status(200).json(user);
        } else {
            res.status(404).json({message: 'User not found'});
        }
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

const updateUser = async (req, res) => {
    const id = req.params.id;
    const {email, username, first_name, last_name} = req.body;
    try {
        const output = await updateQuery(id, email, username, first_name, last_name);
        if (output.length > 0) {
            res.status(200).json('user info updated successfully')
        } else {
            res.status(404).json("User not found")
        }
        
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

const loginUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Fetch hashed password from `hashpwd` table
        const user = await queryUserByUsername(username);   
        if (user.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        const hashedPassword = user[0].password;

        // Step 2: Compare provided password with hashed password
        const isMatch = await bcrypt.compare(password, hashedPassword);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Step 3: Successful login
        res.status(200).json({ message: 'Login successful!' });
    } catch (err) {
        res.status(500).json({ error: 'An error occurred during login. ' + err.message });
    }
};

const registerUser = async (req, res) => {
    const { username, email, first_name, last_name, password } = req.body;

    try {
        // Step 1: Hash the password
        const hashedPassword = await hashPassword(password);

        // Step 2: Execute transaction
        await database.transaction(async (trx) => {
            await saveUserWithTransaction(trx, username, email, first_name, last_name);
            await saveHashedPasswordWithTransaction(trx, username, hashedPassword);
        });

        // Step 3: Respond with success
        res.status(201).json({ message: 'User registered successfully!' });

    } catch (err) {
        // If an error occurs, transaction is rolled back automatically
        res.status(500).json({ error: `Registration failed: ${err.message}` });
    }
};

module.exports = {
    showAllUsers,
    showUserById,
    updateUser,
    loginUser,
    registerUser
};