import { Provider } from 'jotai'
import { SpeedInsights } from "@vercel/speed-insights/react"
import { 
    BitUpdaterProvider, 
    BroadcastProvider, 
    // InspectProtectionProvider, 
    LangProvider 
} from '@providers'
import Content from '@components/Content'
import { TabNavigatorProvider } from '@contexts/TabNavigatorContext'

function App() {
    return (
        <Provider>
            <SpeedInsights/>
            {/* <InspectProtectionProvider> */}
            <TabNavigatorProvider>
                <LangProvider>
                    <BroadcastProvider>
                        <BitUpdaterProvider>
                            <Content/>
                        </BitUpdaterProvider>
                    </BroadcastProvider>
                </LangProvider>
            </TabNavigatorProvider>
            {/* </InspectProtectionProvider> */}
        </Provider>
    )
}

export default App
