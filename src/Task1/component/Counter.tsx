import { useState } from 'react'
import { Button } from '../../Task1/component/Button'

const Counter = () => {
    const [count, setCount] = useState<number>(0)

    const inc = () => setCount((prev) => prev + 1)
    const dec = () => setCount((prev) => prev - 1)
    return (
        <>
            <div className='text-center space-y-4'>
                <h2 className='text-xl font-bold'>Counter</h2>
                <p className='text-3xl font-bold'>{count}</p>
                <div className='justify-center flex gap-4'>
                    <Button label="+" onClick={inc} />
                    <Button
                        label="-"
                        onClick={dec}
                        variant='secondary'
                    />
                </div>
            </div>
        </>
    )
}

export default Counter