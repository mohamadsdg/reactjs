import React from 'react';

class Easyform extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            FirstName : 'Mohamad',
            Gender:'',
            desc:'I Love JavaScript',
            checkYoungman:'',
            checkOldman:''
        };
    }
    handleElement(e){
        const target = e.target ;
        //check mikonim ke aya jensesh check hast ya inputie
        //age checkibood ture ya false barmigardone(radio ham true false barmigardone !!)
        //age inputi bood value on roo mide
        const value = target.type === 'checkbox' ? target.checked : target.value ;
        const name = target.name ;

        this.setState({
            // bekhatere in az destructuring estefade kardim ke miad har seri
            // value ra be moteghayer marbotee nesbat midee
            // noktash inbood !!! yeeeeessssss
            [name] : value

        });
    };
    handleSubmit(event) {
        // ba in method ke neveshtim data haro mitonim begiirim vase karhaEke mikhaym
        // masalan bedim be api ya befredtim be server
        event.preventDefault();
        console.log(this.state);
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label> firstname: </label>
                    <input name='FirstName' type="text" value={this.state.FirstName} onChange={this.handleElement.bind(this)}/>
                    <label> Gender: </label>
                    <select name='Gender' value={this.state.Gender} onChange={this.handleElement.bind(this)}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <label>Description :</label>
                    <textarea name='desc' value={this.state.desc} onChange={this.handleElement.bind(this)}/>
                    <label>
                        10-20
                        <input type="checkbox" name='checkYoungman' value='' onChange={this.handleElement.bind(this)}/>
                    </label>
                    <label>
                        50-70
                        <input type="checkbox" name='checkOldman' value='' onChange={this.handleElement.bind(this)}/>
                    </label>
                    <hr/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
export default Easyform;