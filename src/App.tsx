import { Provider } from 'jotai'
import { BitUpdaterProvider, BroadcastProvider, InspectProtectionProvider, LangProvider } from '@providers'
import Content from '@components/Content'

function App() {
    return (
        <Provider>
            <InspectProtectionProvider>
                <BitUpdaterProvider>
                    <LangProvider>
                        <BroadcastProvider>
                            <Content/>
                        </BroadcastProvider>
                    </LangProvider>
                </BitUpdaterProvider>
            </InspectProtectionProvider>
        </Provider>
    )
}

export default App
