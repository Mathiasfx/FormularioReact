import React from 'react';

const OptionProfesiones = () => {
    //Array de Profesiones 
    const option =  [{ value: '', name: 'Seleccione una Profesion' },{ value: 'Cantante', name: 'Cantante' },{ value: 'Musico', name: 'Músico' },{ value: 'Banda', name: 'Banda' },
                     { value: 'Productor Musical', name: 'Productor Musical' },{ value: 'Productora', name: 'Productora' },{ value: 'Sello Discográfico', name: 'Sello Discográfico' },
                     { value: 'Estudio de Grabación', name: 'Estudio de Grabación' },{ value: 'Youtubers', name: 'Youtubers' },{ value: 'Instagramers', name: 'Instagramers' },
                     { value: 'Creador de Podcast', name: 'Creador de Podcast' },{ value: 'Radio', name: 'Radio' },{ value: 'Diario Digital', name: 'Diario Digital' },
                     { value: 'Festival', name: 'Festival' },{ value: 'Fiesta Nacional', name: 'Fiesta Nacional' },{ value: 'Secretaria de Cultura', name: 'Secretaria de Cultura' },
                     { value: 'Teatro', name: 'Teatro' },{ value: 'Club', name: 'Club' },{ value: 'Centro Cultural', name: 'Centro Cultural' },{ value: 'Discoteca', name: 'Discoteca' },
                     { value: 'Organización Cultural fines de Lucro', name: 'Organización Cultural fines de Lucro'},{ value: 'Gimnacio', name: 'Gimnacio' },{ value: 'Personal Trainer', name: 'Personal Trainer' },{ value: 'Abogado', name: 'Abogado' },
                     { value: 'Medico', name: 'Medico' },{ value: 'Contador Publico', name: 'Contador Publico' },{ value: 'Arquitecto', name: 'Arquitecto' },
                     { value: 'Profesion Particular', name: 'Profesion Particular' },{ value: 'Institucion Educativa', name: 'Institucion Educativa' },
                    ];
    
       
        return(
            //retornamos los options
            option.map((e, key) => {
                return <option key={key} value={e.value}>{e.name}</option>;
                
             })
        )

};

export default OptionProfesiones;