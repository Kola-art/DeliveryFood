import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { logIn } from '../../redux-store/actions';

const ModalAuth = ({ onClose, dispatch }) => {

    const handleClick = () => onClose();

    const history = useHistory();

    const [state, setState] = useState({
        login: '',
        password: ''
    });

    const handleChange = (e) => {

        const target = e.target;
        const name = target.name;
        const value = target.value;

        setState({
            ...state,
          [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(logIn(state));
        onClose();
        history.push('/');
    }

    return (<>
        <div className="modal-auth" onClick={handleClick}></div>
        <div className="modal-dialog modal-dialog-auth">
            <button onClick={handleClick} className="close-auth">&times;</button>
            <form onSubmit={handleSubmit}>
                <fieldset className="modal-body">
                    <legend className="modal-title">Авторизация</legend>

                    <label className="label-auth">
                        <span>Логин</span>
                        <input type="text" name="login" value={state.login} onChange={handleChange}/>
                    </label>

                    <label className="label-auth">
                        <span>Пароль</span>
                        <input type="password" name="password" value={state.password} onChange={handleChange}/>
                    </label>
                </fieldset>
                <div className="modal-footer">
                    <div className="footer-buttons">
                        <button className="button button-primary button-login" type="submit">
                            Войти
                        </button>
                    </div>
                </div>
            </form>
        </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        userData: state
    }
}

const WrappedMainComponent = connect(mapStateToProps)(ModalAuth);

export default WrappedMainComponent;