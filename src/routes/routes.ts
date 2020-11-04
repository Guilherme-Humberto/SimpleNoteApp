import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '../pages/Home'
import Initial from '../pages/Initial'

const Routes = createAppContainer(
    createSwitchNavigator({
        Main,
        Initial
    })
)

export { Routes }
