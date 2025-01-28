import { RecoilRoot } from 'recoil'
import { BroadcastProvider, LangProvider } from '@providers'
import Content from '@components/Content'
import InspectProtectionProvider from '@providers/InspectionProtectionProvider'

function App() {
    return (
        <RecoilRoot>
            <InspectProtectionProvider>
                <LangProvider>
                    <BroadcastProvider>
                        <Content/>
                    </BroadcastProvider>
                </LangProvider>
            </InspectProtectionProvider>
        </RecoilRoot>
    )
}

export default App
