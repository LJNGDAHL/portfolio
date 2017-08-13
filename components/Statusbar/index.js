import { Component } from 'react';

export default class Statusbar extends Component {
  constructor() {
    super();
    // TODO: Replace statue with Redux
    this.state = {
      data: {},
      fetchCompleted: false
    };
  }

  // FIXME: Linter problems!
  handleClick = async() => {
    if (!this.state.fetchCompleted) {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        this.setState({
          data,
          fetchCompleted: true
        });
      } catch (e) {
        console.log(e);
      }
    }
  }

  render() {

    return (
      <div className="Statusbar">
        <p>{ this.state.fetchCompleted ? this.state.data.message : 'I haven\'t found nothing' }</p>
        <button onClick={ this.handleClick }>Hit me!</button>

        <style jsx>{`
          .Statusbar {
            background-color: var(--black);
            color: var(--white);
            padding: 0.7rem;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
          }

          button {
            color: var(--black);
          }

        `}</style>
      </div>
    )
  }
}
