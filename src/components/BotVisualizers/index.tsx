import BotVisualizerItem from "@components/BotVisualizer"
import { autoIncrementorsState } from "@state/atoms"
import { Incrementor } from "@state/defaultAutoIncrementors"
import { useRecoilValue } from "recoil"

const BotVisualizers = () => {
    const autoIncrementors = useRecoilValue<Incrementor[]>(autoIncrementorsState)

    return (
        <div
            style={{
                width: '100%',
                overflowY: 'auto'
            }}
        >
            {autoIncrementors.map((i, k) => (
                <div 
                    key={k + JSON.stringify(i.id)} 
                    style={{ width: '100%', display: 'flex', flexDirection: 'column' }}
                >
                    <BotVisualizerItem 
                        key={k + JSON.stringify(i.id)}
                        // botUnits={i.units}
                        botId={i.id}
                    />
                    <div style={{ height: 20, backgroundColor: '#000' }}></div>
                </div>
            ))}
        </div>
    )
}

export default BotVisualizers