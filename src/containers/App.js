import React, {Component} from 'react';
import CardList from '../components (pure functions)/CardList.js';
import SearchBox from '../components (pure functions)/SearchBox.js';
import './App.css';
import ErrorBoundary from '../components (pure functions)/ErrorBoundary.js';
import Scroll from '../components (pure functions)/Scroll.js';

// The entire app is described through state (we tell the app what state it has). In this case, the entire app is described through the constructors (states) of robots and searchfield. We tell these two what the state is. What are the functions that should be passed through these states
class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

// These special components (pure functions) are impure since they have states, but they belong to containers, which just passes down states to other components (pure functions)


// componentDidMount() is built in so don't need any arrows
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users})); /*Updating the state so render runs again*/
    }


    onSearchChange = (event) => {
        // To actually set the state so constructor will activate the searchfield properly
        this.setState({searchField: event.target.value})

    }


    render() {
        const {robots, searchField} = this.state;
        const filteredRobots = robots.filter(robot => {
            //If robots name (lower cased) includes the search field then return matching
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return !robots.length ? /*robots.length === 0 but shorthand, will equal zero*/
            /*If there are no robots, replace with Loading*/
            <h1>Loading</h1> :
            (
                <div>
                    <div className={'tc'}>
                        <h1 className='f1'>RoboFriends</h1>
                        <SearchBox searchChange={this.onSearchChange}/>
                        <Scroll>
                            <ErrorBoundary>
                                <CardList robots={filteredRobots}/>
                            </ErrorBoundary>
                        </Scroll>
                    </div>
                </div>
            );
        }
}

export default App;

//The above is now constantly changing so now it needs to communicate with 'filteredRobots'

// How it works:
// 1. App component with two states - 'robots' and 'searchField'. Any component with state uses 'class' syntax

// 2. Virtual DOM collects entire state which React uses to render and pass them down as props to the components (pure functions)

// 3. Components are pure functions so they render. App will always look the same

// 4. App only changes the state

// 5. Pass down things as props so passed down 'onSearchChange' to the 'SearchBox'

// 6. Every time there's an 'onChange' on the input, the SearchBox communicates with App.js saying "there was a change",
// telling it to run the onSearchChange function

// 7. Function runs and updates the state of searchField to whatever is typed

// 8. Info in searchbox can communicate with cardlist and tell it to filter robot state

// 9. Smart components (pure functions) have state, have class X extends Component

// 10. Another thing inside components (pure functions): lifecycle methods. Mounting methods are called when an instance of a
// component is being created and inserted into the DOM. These are lifestyle hooks and they will auto trigger when the
// app gets loaded on the website. Ex. When site is run, and app component is refreshed, then it gets mounted into the
// doc with the ID of root

// When mounting component, we're replacing the div ID with the entire app. It's the start of the app. The mounting lifecycle hooks
// are in order:
// Does it have constructor()? If so run
// Does it have componentWillMount()? If so run
// Does it have render()? If so run
// Does it have componentDidMount()? If so run

// 11. Updating can be caused by changes to props or state. Happens when a component is being re-rendered aka website
// is refreshed

// 12. Unmounting when a component is removed/deleted from the page

// 13. Fetch is a window method that comes with all browsers
