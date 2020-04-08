import { cn } from 'delta'

import Image from '../Image'
import Card from '../Card'

import './ResumeCard.css'

const ResumeCard = ({
  className,
  file,
  getItems,
  items,
  images: [img1, img2],
  name,
  downloadText,
  ...props
}) => {
  return `
    <div class='${cn(className, 'resume-card')}'>
        ${img1 ? Image({
          ...props,
          ...img1
        }) : ''}
        ${img2 ? Image({
          ...props,
          ...img2
        }) : ''}
        <div class='card-content-wrapper'>
            ${Card({
              className: 'developer-card',
              ...props,
              ...name,
              getItems,
              items
            })}
            <div class='card-download-button'>
                <a class='card-download-link' href=${file} download='resume'>
                    <span class='download-text'>${downloadText}</span>
                </a>
            </div>
        </div>
    </div>
`
}

export default ResumeCard
