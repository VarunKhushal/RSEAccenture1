import React from 'react';

export default class AutoCompleteText extends React.Component {
    constructor (props) {
        super(props);
        this.items = [
            'Toilet Paper',
            'Pet Food',
            'Rice',
        ];
        this.state = {
            suggestions: [],
        };
    }

    onTextChanged = (e) => {
        const value = e.target.value;
        let suggestions = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = this.items.sort().filter(v => regex.test(v));
        }
        this.setState(() => ({ suggestions }));

    }

    renderSuggestions () {
        const { suggestions } = this.state;
        if (suggestions.length === 0) {
            return null;
        }
        return (
            <ul>
                {suggestions.map((item) => <li>{item}</li>)}
            </ul>
        )
    }

    render () {
        return (
            <div>
                <input onChange={(e) => console.log(e.target.value)} type="text" />
                {this.renderSuggestions()}
            </div>
        )
    }
}