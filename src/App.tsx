import { ToggleComponent } from 'components/ToggleComponent';
import 'App.scss';
import { TimeoutComponent } from 'components/TimeoutComponent';
import { DebounceComponent } from 'components/DebounceComponent';

function App() {
    return (
        <div className="App">
            {/* <ToggleComponent></ToggleComponent> */}
            {/* <TimeoutComponent></TimeoutComponent> */}
            <DebounceComponent></DebounceComponent>
        </div>
    );
}

export default App;
