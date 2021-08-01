import React from "react";
import {fireEvent, render} from "@testing-library/react";
import {Footer} from "../presentation/layout/Footer";

import {Header} from "../presentation/layout/Header";
import {LogIn} from "../../src/presentation/pages/autenticacion/Login";
import {signUp} from "../../src/presentation/pages/autenticacion/Login";
import {Home} from "../../src/presentation/pages/Home";
import {Router} from "react-router-dom";
import {createMemoryHistory} from 'history';
import NotFoundPage from "../pages/utils/NotFoundPage";


jest.mock('../../infrastructure/services/firebase/config/auth', () => ({
    logout: () => Promise.resolve({}),
    signInWithGoogle: () => Promise.resolve({}),
}));


describe('renders test in views', () => {

    const history = createMemoryHistory()

    const dummyTicket = {
        tiqueteId: "HoPQghuxLxf",
        horaIngreso: "10:20",
        placa: "ERT569",
        celdaId: "C123",
        tipoVehiculo: "moto"
    }

    const dummyFactura = {
        facturaId: "HoPQghuxLxfbMVHYAviqkTIk2JK2",
        empleadoId: "V456",
        horaSalida: "10:30",
        canitdadMinutos: "300",
        valorTotal:"4000"
    }

    test('testing factura', () => {
        const updateCount = jest.fn();

        const history = {
            push: jest.fn()
        };

    })