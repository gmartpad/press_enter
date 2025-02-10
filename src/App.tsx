import { Provider } from 'jotai'
import { BitUpdaterProvider, BroadcastProvider, InspectProtectionProvider, LangProvider } from '@providers'
import Content from '@components/Content'
import { TabNavigatorProvider } from '@contexts/TabNavigatorContext'

function App() {
    return (
        <Provider>
            <InspectProtectionProvider>
                <TabNavigatorProvider>
                    <LangProvider>
                        <BroadcastProvider>
                            <BitUpdaterProvider>
                                <Content/>
                            </BitUpdaterProvider>
                        </BroadcastProvider>
                    </LangProvider>
                </TabNavigatorProvider>
            </InspectProtectionProvider>
        </Provider>
    )
}

export default App
