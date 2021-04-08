import { Box } from 'grommet';
import React, { useMemo, useState } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Modules } from '../pages/Modules';
import { PageIndex } from '../pages/PageIndex';
import { UserContext } from './UserContext';

import '../styles/main.sass'
import { Navbar } from './Navbar';

export default function App() {
    const [user, setUser] = useState(null);
    const contextValue = useMemo(() => ({ user, setUser }), [user, setUser]);

    return (
        <div className='App'>
            <UserContext.Provider value={contextValue}>
                <Box direction='row'>
                
                    <Navbar />
                    <Router>
                        <Switch>
                            <Route component={Modules} path='/modules/' />
                            <Route component={PageIndex} path='/' />
                        </Switch>
                    </Router>
                </Box>
            </UserContext.Provider>
        </div>
    );
}
