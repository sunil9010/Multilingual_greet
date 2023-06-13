import {useState} from 'react'
import TabItems from './Components/TabItems'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
const App = () => {
  const [idElement, setElementId] = useState(languageGreetingsList[0].id)

  const clickId = eleId => setElementId(eleId)

  const find = languageGreetingsList.find(each => each.id === idElement)
  const {imageUrl, imageAltText} = find

  return (
    <div>
      <div className="contaier">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="unList">
          {languageGreetingsList.map(each => (
            <TabItems
              key={each.id}
              tabs={each}
              clickId={clickId}
              isActive={idElement === each.id}
            />
          ))}
        </ul>
        <div>
          <img className="img" src={imageUrl} alt={imageAltText} />
        </div>
      </div>
    </div>
  )
}

export default App
