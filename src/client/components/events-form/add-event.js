import React from 'react';
import EventsForm from './events-form';

class AddEvent extends React.Component{
    render(){
        return(<EventsForm isEditing={false}/>);
    }
}
export default AddEvent;