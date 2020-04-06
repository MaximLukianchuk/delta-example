import Δ, { get } from 'delta'

class PokemonPage extends Δ.Component {
  constructor(config) {
    super(config)

    this.state = {
      title: 'Pokemon Page!',
      ip: 'Loading...'
    }
  }

  events() {
    return {
      'click .title': 'onTitleClick'
    }
  }

  didRender() {
    // get('https://api.ipify.org/?format=json')
    //   .then(({ip}) => {
    //     this.setState({...this.state, ip})
    //   })
  }

  onTitleClick(event) {
    console.log('Пацаны ваще ребята!')
  }
}

export const pokemonPage = new PokemonPage({
  selector: '#pokemon-page',
  template: `
    <h1 class="title">{{title}}</h1>
    <h2>{{ip}}</h2>
  `
})
