
import React, { useState } from 'react';
import styles from './Home.module.css';

const ValidationErrors = ({ errors }) => {
    if (errors === null || errors.length === 0) {
        return null;
    }

    return (
        <div>
            <p>Please correct the following errors:</p>
            <ul>
                {errors.map(error => <li key={error}>{error}</li>)}
            </ul>
        </div>
    );
};

const Home = ({ updateUsername }) => {
    const [username, setUsername] = useState('');
    const [errors, setErrors] = useState([]);

    const onChange = (e) => {
        setUsername(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const errorsToSet = [];

        if (!username) {
            errorsToSet.push('Please provide a username.');
        }

        if (errorsToSet.length > 0) {
            setErrors(errorsToSet);
            return;
        }

        updateUsername(username);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.logowrapper}>
                <img src="https://fontmeme.com/permalink/200606/73fb7f72d9cf251776321c0a872c0693.png" alt="pokemon-font" />
                <img className={styles.pokeball} src="https://pngimg.com/uploads/pokeball/pokeball_PNG21.png" alt="pokeball-image" />
                <img src="https://fontmeme.com/permalink/200606/c750fb7844c7368a811973ef857af248.png" alt="pokemon-font" />
            </div>
            <div className={styles.loginbox}>
                <ValidationErrors errors={errors} />
                <form onSubmit={onSubmit}>
                    <label>User Login</label>
                    <input type='text' value={username}
                        onChange={onChange} />
                    <button>Login</button>
                </form>
            </div>
        </div>
    );
}

export default Home;