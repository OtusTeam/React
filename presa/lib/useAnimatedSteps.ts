import { useSpring } from 'react-spring'
import { useMemo } from 'react'

const processSteps = <T extends Record<string, {}>>(steps: T[]) => {
  const states = new Map<keyof T, Record<string, {}>>()
  return steps.map(step => {
    const newStep = {} as T

    Object.keys(step).forEach((key: keyof T) => {
      if (states.has(key)) {
        const state = states.get(key)
        const newState = { ...state, ...step[key] }
        states.set(key, newState)
        newStep[key] = newState
      } else {
        const newState = step[key]
        states.set(key, newState)
        newStep[key] = newState
      }
    })

    return newStep
  })
}

export const useAnimatedSteps = <T extends Record<string, {}>>(
  steps: T[],
): (step: number) => Record<keyof T, ReturnType<typeof useSpring>> => {
  const processedSteps = processSteps(steps)
  return (step: number) => {
    let springs = {} as Record<keyof T, ReturnType<typeof useSpring>>

    Object.keys(processedSteps[step]).forEach((key: keyof T) => {
      /* eslint-disable react-hooks/rules-of-hooks */
      // @ts-ignore
      springs[key] = useSpring({
        from: processedSteps[0][key],
        to: processedSteps[step][key],
      })
      /* eslint-enable react-hooks/rules-of-hooks */
    })

    return springs
  }
}
