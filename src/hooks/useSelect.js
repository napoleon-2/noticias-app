import React,{useState} from 'react';


const useSelect = (stateInicial, opciones) => {
 //State de custom hook
    const [state, actualizarState] = useState('');

        const SelectNoticias = () => (
            <select
                className="browser-default"
            >
                <option value="">Selecciones</option>
            </select>
        );
        
        return [state, SelectNoticias]
     
}
 
export default useSelect;