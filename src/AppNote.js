import React, {Component} from 'react';
import propTypes from 'prop-types';
import $ from "jquery";
import JQueryUI from'jqueryui';

class Note extends Component {
    constructor(props) {
        super(props);
        this.newText = React.createRef() ;
        this.nodeNote = React.createRef() ;
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

    randomBetween = (min, max) => {
        return min + Math.ceil(Math.random() * max) ;
    };
    componentWillMount(){
        this.style = {
            right : `${this.randomBetween(0, (window.innerWidth - 150) )}px`,
            top : `${this.randomBetween(0, (window.innerHeight - 150) )}px`,
            transform : `rotate(${this.randomBetween(0,15)}deg)`,
        }
    }

    componentDidMount(){
        // this.nodeNote.current.draggable();
        // $ (this.nodeNote.current).Draggable ();
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
            <div className='note' style={this.style} ref={this.nodeNote}>
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
            <div className="note" style={this.style}>
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
            notes: []
        };
    }
    componentWillMount(){
        let self = this;
        if (this.props.count) {
            $.getJSON("http://baconipsum.com/api/?type=all-meat&sentences=" +
                this.props.count + "&start-with-lorem=1&callback=?", function (data) {
                data[0].split('. ').forEach(function (sentence) {
                    self.add(sentence.substring(0, 40));
                });
            });
        }
    }
    //az next id bishtar vase in estefade kardim ke betonim update konim note ro
    // chon age maghadire id va key yeki beshan age ma ro index 5 edit dashte bashim
    // va index shore 3 ro masalan pak konim chon edite edit toye index 5 montaghel mishe be index shomare 4
    // halaa cheraa !!! ( ma ke delete va edit mon ro indexe chera pas key ro yejor dige meghdar bedim doros mishe !?)
    nextId = () => {
        this.uniqueId = this.uniqueId || 0;
        return this.uniqueId++;
    };
    add = (newText) => {
        let arrNote = this.state.notes;
        arrNote.push({
            id: this.nextId(),
            note: newText
        }) ;
        this.setState({notes: arrNote});
        console.log(arrNote);
    };
    // tip : bayad besorate function neveshte beshe na methed
    // chon mikhaym data pass bedim fk mikonam !
    update = (newText,i) => {
        let arrNote = this.state.notes;
        arrNote[i].note = newText;
        this.setState({notes: arrNote});
    };
    remove = (i) => {
        let arrNote = this.state.notes;
        arrNote.splice(i,1);
        this.setState({notes:arrNote})
    };
    eachNote(note,i){
        return(
            <Note
                key={note.id}
                index={i}
                onChange={this.update}
                onRemove={this.remove}
            >{note.note}</Note>
        )
    }
    render(){
        const {notes} = this.state ;
        return (
            <div className='board'>
                {notes.map( (note,i) => this.eachNote(note,i)) }
                <button className="btn glyphicon glyphicon-plus" onClick={this.add.bind(null,'New Note')}/>
            </div>
        )
    }
}

export  {Board,Note};