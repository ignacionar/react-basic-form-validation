import React from 'react';
import Card from '../../components/card/Card.jsx';
import Input from '../../components/input/Input.jsx';
import Button from '../../components/button/Button.jsx';
import './auth.css';

import { VALIDATOR_REQUIRE } from './../../utils/validators';

const Auth = () => {
    return (
        <>
            <Card className="authentication">
                <h2>Login</h2>
                <form>
                    <Input type="text" element="input" id="nombre" label="Nombre" validators={[VALIDATOR_REQUIRE()]} errorText="Campo obligatorio!"></Input>
                    <Input type="email" element="input" id="email" label="Email" validators={[VALIDATOR_REQUIRE()]} errorText="Campo obligatorio!"></Input>
                    <Input type="password" element="input" id="password" label="Contraseña" validators={[VALIDATOR_REQUIRE()]} errorText="Campo obligatorio!"></Input>
                    <Button>Login</Button>
                </form>
            </Card>
        </>
    );
};

export default Auth;
