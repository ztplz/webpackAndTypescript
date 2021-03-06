import * as React from 'react';

import '../../css/input.scss';

export default class InputComponent extends React.Component<{}, {}>{

    inputObj: any;
    setInputTextTrigger: any;
    constructor(props) {
        super(props);
        this.state = {
            inputText: ''
        };
        this.inputOnchange = this.inputOnchange.bind(this);
    }

    clearInputTextTrigger(trigger: any) {
        clearTimeout(trigger);
    }

    inputOnchange(e) {
        if (this.clearInputTextTrigger) {
            this.clearInputTextTrigger(this.setInputTextTrigger);
            this.setInputTextTrigger = null;
        }

        this.setInputTextTrigger = setTimeout(() => {
            this.setState({inputText:this.inputObj.value});
        }, 200);
    }

    render() {
        return (
            <div>
                <input className={'input'} ref={obj => { this.inputObj = obj; } } onChange={this.inputOnchange} />
            </div>
        );
    }

}