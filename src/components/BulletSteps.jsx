import PropTypes from 'prop-types'
import { range } from 'lodash'

export default function BulletSteps({ current, total }) {
  return (
    <nav className='flex items-center' aria-label='Progress'>
      <p className='text-sm font-medium'>
        Step {current} of {total}
      </p>
      <ol role='list' className='ml-5 flex items-center space-x-5'>
        {range(total).map((i) => {
          const step = i + 1
          return (
            <li key={i}>
              {current >= step ? (
                <span className='block w-2.5 h-2.5 bg-indigo-600 rounded-full'></span>
              ) : (
                <span className='block w-2.5 h-2.5 bg-gray-200 rounded-full'></span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

BulletSteps.propTypes = {
  current: PropTypes.number,
  total: PropTypes.number,
}
