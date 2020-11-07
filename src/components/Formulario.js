import React,{Fragment} from 'react';
import {useForm} from 'react-hook-form';
import OptionProfesiones from './OptionProfesiones';
import './Formulario.css';
import { useAlert } from 'react-alert';


const Formulario = () => {
    //Destructuramos los modulos a utilizar del UseForm
    const {register,errors,handleSubmit} = useForm();
    const Alerta = useAlert();

    //Muestra los datos en consola al enviar y resetea el Formulario
    const onSubmit = (data,e) => {console.log(data); e.target.reset();Alerta.show('Mensaje Enviado Correctamente')}
    return(
        <Fragment>
            <h1>Formulario</h1>
            <form onSubmit={handleSubmit(onSubmit)} id="contact_form">
                <input
                name='nombre'
                type='text'
                placeholder='Ingrese su Nombre'
                //Validar Campo
                ref={register({
                    required:{value: true,
                    message:'El Campo Nombre es Obligatorio',
                    },
                    minLength: {
                        value: 3,
                        message: 'El nombre es muy Corto' 
                    }
                })}
                />
                 <span className='error'>{errors?.nombre?.message}</span>
                <input
                name='apellido'
                type='text'
                placeholder='Ingrese su Apellido'
                //Validar Campo
                ref={register({
                    required:{value: true,
                    message:'El Campo Apellido es Obligatorio',
                   },
                   minLength: {
                    value: 3,
                    message: 'El apellido es muy corto' 
                }
                })}
                />
                 <span className='error'>{errors?.apellido?.message}</span>
                <input
                name='telefono'
                type='number'
                placeholder='Ingrese su telefono'
                
                //Validar Campo
                ref={register({
                    required:{value: true,
                    message:'Debe ingresar un numero de Telefono',
                    },
                    minLength: {
                        value: 3,
                        message: 'El Numero de Telefono es muy corto' 
                    }
                })}
                />
                <span className='error'>{errors?.telefono?.message}</span>
                 <input
                name='email'
                type='text'
                placeholder='Ingrese su email'
                //Validar Campo email
                ref={register({
                    required:{value: true,
                    message:'Debe ingresar un email valido'},
                    minLength: {
                        value: 3,
                        message: 'El mail es muy corto' 
                    },
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Direccion de Mail invalida"
                      }
                })}
                />
                 <span className='error'>{errors?.email?.message}</span>
                 <div className="subject">
                    <select
                    name='profesion'
                    placeholder='Seleccione una Profesion'
                    //Validar Campo
                    ref={register({
                        required:{value: true,
                        message:'Debe seleccionar una Profesion'}
                    })}
                    >                                    
                   <OptionProfesiones/>                
                    </select>
                </div>
                 <span className='error'>{errors?.profesion?.message}</span>             
                <input
                type='submit'
                value='Enviar'
                id="form_button"
                />
 
            </form>            
        </Fragment>
    )
};

export default Formulario;