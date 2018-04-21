import React, {Component} from 'react';
export default class Message extends Component{
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}
//
export class LeftSideComponent extends Component{
    render() {
        return (
            <div>
                <p>کامپوننتی که سمت چپ استراکچر را میسازد .</p>
            </div>
        );
    }
}
export class Structure extends Component{
    render() {
        return (
            <div>
                <table>
                    <tr>
                        <td className="rightSide">
                            {this.props.rightSide}
                        </td>
                        <td className="leftSide">
                            {this.props.leftSide}
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}
//
class Fancyborder extends Component{
    render() {
        return (
            <div style={{border: "2px solid red"}}>
                {this.props.children}
            </div>
        );
    }

}
export class Dialog extends Component{
    render() {
        return (
            <Fancyborder>
                <h1>{this.props.title}</h1>
                <p>{this.props.context}</p>
            </Fancyborder>
        );
    }

}
export class WlcDialog extends Component{
    render() {
        return (
            <Dialog title='کامپوننت خاصی از کامپوننت دیالوگ' context="توضیحات ...."> </Dialog>
        );
    }

}