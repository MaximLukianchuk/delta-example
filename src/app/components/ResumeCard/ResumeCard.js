import { cn } from 'delta'

import Image from '../Image'
import Card from '../Card'
import Star from '../Star'

import './ResumeCard.css'

const ResumeCard = ({
  className,
  file,
  items,
  images: [img1, img2],
  name,
  downloadText,
  id,
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
              items
            })}
            ${file ? `<div class='card-download-button'>
                <a class='card-download-link' href=${file} download='resume'>
                    <span class='download-text'>${downloadText}</span>
                </a>
            </div>` : ''}
        </div>
        ${id ? Star({
          className: 'resume-star',
          selected: true
        }) : ''}
    </div>
`
}

export default ResumeCard
