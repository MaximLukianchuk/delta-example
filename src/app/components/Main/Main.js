import ResumeCard from '../ResumeCard'
import withHeader from '../../hocs/withHeader'
import myResume from '../../static/myResume.pdf'

import './Main.css'

const Main = props => {
  const items = [
    { property: 'ГОД РОЖДЕНИЯ', value: '1999' },
    { property: 'ОПЫТ РАБОТЫ', value: 'год+' },
    { property: 'АДРЕС', value: 'Морской пр, 28' },
    { property: 'ТЕЛЕФОН', value: '+7 (931) 594-06-46' },
    { property: 'E-MAIL', value: 'lukianchukma@yandex.ru' }
  ]
  
  const images = [
    { type: 'myself2', className: 'card-image', size: 'medium', alt: 'фото разработчика' },
    { type: 'myself', className: 'hidden-card-image', size: 'medium', alt: 'фото разработчика с пивком' }
  ]
  
  const name = {
    title: 'Лукьянчук Максим',
    subTitle: 'Разработчик интерфейсов'
  }
  
  const downloadText = 'Скачать резюме'
  
  return `
    ${ResumeCard({
      ...props,
      className: 'my-resume',
      items,
      images,
      name,
      downloadText,
      file: myResume
    })}
`
}

export default withHeader(Main)
