import React from "react";
import {shallow} from 'enzyme';

import CounterApp from "../CounterApp";

describe('Prueba en <CounterApp />', () => {

    const value = 100;
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<CounterApp value={ value } />);
    })

    test('debe mostrar <CounterApp /> correctamente',()=>{

        expect(wrapper).toMatchSnapshot();
    })

    test('debe mostrar el valor de 100 enviado en el props', ()=>{

        const textoValue = wrapper.find('h2').text().trim();
        expect(textoValue).toBe('100');

    });

    test('debe incrementar con el boton +1', () => {
        const btn1 = wrapper.find('button').at(0).simulate('click');

        const textoValue = wrapper.find('h2').text().trim();

        expect(textoValue).toBe('101');

    });

    test('debe decrementar con el boton +-', () => {
        const btn3 = wrapper.find('button').at(2).simulate('click');

        const textoValue = wrapper.find('h2').text().trim();

        expect(textoValue).toBe('99');

    });

    test('debe de colocar el valor por defecto con el btn reset',()=>{
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const textoValue = wrapper.find('h2').text().trim();

        expect(textoValue).toBe('100');

    })

})

