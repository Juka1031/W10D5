import React from 'react';

class Tabs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 0
        }

        this.activeTab = this.activeTab.bind(this);
    }

    activeTab(num) {
        this.setState({selected: num})
    }

    render() {
        const titles = ['one', 'two', 'three']
        const content = ['oneContent', 'twoContent', 'threeContent']
        const allTabs = titles.map((title, i) => {
            return (
                <Header
                    title = {title}
                    selected = {this.activeTab(i)}
                    content = {content[i]}
                />
            );
        });

        return (
            <li>{allTabs}</li>
        )

    }
}

class Header extends React.Component {
    render () {
        return (
            
            <li>
                {this.props.title}
                {this.props.selected}
            </li>
        )
    }
}

export default Tabs;

