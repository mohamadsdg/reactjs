import React, {Component} from 'react';
import propTypes from 'prop-types';

class Note extends Component {
    constructor(props) {
        super(props);
        this.newText = React.createRef() ;
        this.state ={
            checked :  true,
            editing : false,
        }
    }
    handleCheckbox(){
        this.setState({
            // tip + : ba har bar handle miad check mikone sate ghablio harchi bod not mikone .
            checked :  !this.state.checked
        });
        // for render
        {/*<div>
            <label>
                <input type="checkbox" onChange={this.handleCheckbox.bind(this)} defaultChecked={checked}/>
                <p>this box {msg}</p>
            </label>
        </div>*/}
    }

    handleEdit(){
        this.setState({editing : true})
    }
    handleRemove(){
        // alert('removing note');

        this.props.onRemove(this.props.index);

    }

    handleSave(){
        // tip ++: omadim component pedar ba farzand ra ertebat dadim
        // be in sorat ke mavared ro besorat property component farzad gharar dadim
        // inja component pedar Board hastesh (Y)

        this.props.onChange( this.newText.current.value , this.props.index);
        // moadele onchange dar balla methodesh to pedar (Board ) mishe ==> update(newText /* un new Text e */  ,i  /*index uni ke change shode */ )

        this.setState({editing : false});
    }
    renderDisplay(){
        return(
            <div className='note'>
                <p>{this.props.children}</p>
                <span>
                    <button className="btn btn-primary glyphicon glyphicon-pencil" onClick={this.handleEdit.bind(this)}/>
                    <button className="btn btn-danger glyphicon glyphicon-trash" onClick={this.handleRemove.bind(this)}/>
                </span>
            </div>
        )
    }
    renderForm(){
        return (
            <div className="note">
                <textarea ref={this.newText} className="form-control" defaultValue={this.props.children}/>
                <button className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk" onClick={this.handleSave.bind(this)}/>
            </div>
        )
    }

    render() {
        const {editing} = this.state;
        if (editing) {
            return this.renderForm()
        } else {
            return this.renderDisplay()
        }
    }
}

class Board extends Component{
    static propTypes = {
        // tip : in mishe yejor custom validation
        count : function (props, propName) {
            // in props[propName] mige ke esme un props ro begir (be sorate koli tarif mishe )
            // age number nabood Error bede
            if ( typeof props[propName] !== "number") {
                return new Error('The count property must be a number!')
            }
            if ( props[propName] > 100 ){
                return new Error('Creating ' + props[propName] + ' notes is not a good idea!');
            }
        }
    };
    constructor(props) {
        super(props);
        this.state = {
            notes: [
                'Call Amir',
                'Email Brittany',
                'Whats App Alina',
                'Pick up Shadi'
            ]
        }
    }
    // tip : bayad besorate function neveshte beshe na methed
    // chon mikhaym data pass bedim fk mikonam !
    update = (newText,i) => {
        let arrNote = this.state.notes;
        arrNote[i] = newText;
        this.setState({notes: arrNote})
    };
    remove = (i) => {
        let arrNote = this.state.notes;
        arrNote.splice(i,1);
        this.setState({notes:arrNote})
    };
    eachNote(note,i){
        return(
            <Note
                key={i}
                index={i}
                onChange={this.update}
                onRemove={this.remove}
            >{note}</Note>
        )
    }
    render(){
        const {notes} = this.state ;
        return (
            <div className='board'>{notes.map( (note,i) => this.eachNote(note,i)) }</div>
        )
    }
}

export  {Board,Note};