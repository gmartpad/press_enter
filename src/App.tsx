import { RecoilRoot } from 'recoil'
import { BitUpdaterProvider, BroadcastProvider, InspectProtectionProvider, LangProvider } from '@providers'
import Content from '@components/Content'

function App() {
    return (
        <RecoilRoot>
            <InspectProtectionProvider>
                <BitUpdaterProvider>
                    <LangProvider>
                        <BroadcastProvider>
                            <Content/>
                        </BroadcastProvider>
                    </LangProvider>
                </BitUpdaterProvider>
            </InspectProtectionProvider>
        </RecoilRoot>
    )
}

export default App
