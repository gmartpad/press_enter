import { Provider } from 'jotai'
import { BitUpdaterProvider, BroadcastProvider, InspectProtectionProvider, LangProvider } from '@providers'
import Content from '@components/Content'

function App() {
    return (
        <Provider>
            <InspectProtectionProvider>
                <LangProvider>
                    <BroadcastProvider>
                        <BitUpdaterProvider>
                            <Content/>
                        </BitUpdaterProvider>
                    </BroadcastProvider>
                </LangProvider>
            </InspectProtectionProvider>
        </Provider>
    )
}

export default App
