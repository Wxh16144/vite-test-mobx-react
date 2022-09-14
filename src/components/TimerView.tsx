import { autorun } from "mobx"
import { observer, useLocalObservable, useAsObservableSource } from "mobx-react-lite"
import { useEffect } from "react"

const TimerView = observer(() => {
    const timer = useLocalObservable(() => ({
        secondsPassed: 0,
        increaseTimer() {
            this.secondsPassed++
        }
    }))

    // 在Effect方法之上触发可观察对象变化。
    useEffect(
        () =>
            autorun(() => {
                if (timer.secondsPassed > 10) alert("Still there. It's a minute already?!!")
            }),
        []
    )

    // 作为demo用途在Effect里定义一个定时器。
    useEffect(() => {
        const handle = setInterval(timer.increaseTimer, 1000)
        return () => {
            clearInterval(handle)
        }
    }, [])

    return <span>Seconds passed: {timer.secondsPassed}</span>
})

export default TimerView

