import './index.css'

const TabItems = props => {
  const {tabs, clickId, isActive} = props
  const {buttonText, id} = tabs

  const element = () => clickId(id)

  const style = isActive ? 'onActive' : 'button'

  return (
    <li className="li">
      <button type="button" className={style} onClick={element}>
        {buttonText}
      </button>
    </li>
  )
}
export default TabItems
