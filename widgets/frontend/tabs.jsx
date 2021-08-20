import React from 'react';

class Tabs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tabIndex: 0
        }

        this.activeTab = this.activeTab.bind(this);
    }

    activeTab(num) {
        this.setState({tabIndex: num})
    }

    clickedTab() {
        console.log("clicked");
        return this.props.key
    }

    render() {
        const titles = ['one', 'two', 'three']
        const content = ['oneContent', 'twoContent', 'threeContent']
        const allTabs = titles.map((title, i) => {
            return (
                <Header
                    key = {`${i}`}
                    title = {title}
                    activated = {i === this.state.tabIndex}
                    content = {content[i]}
                    onClick = {this.clickedTab()}
                />
            );
        });

        return (
            <ul>
                <li>{allTabs} {content} </li>
            </ul>
            
        )

    }
}

class Header extends React.Component {
    render () {
        return (
            <ul>
                <li>
                    {this.props.title}
                    {this.props.selected}
                </li>
            </ul>
            
        )
    }
}

export default Tabs;

