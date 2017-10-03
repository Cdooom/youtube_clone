# Youtube Clone

## Getting Started

Download Starter
```
> npm install
> npm start
```

Get Youtube API key
'https://console.developers.google.com/'
`npm install --save youtube-api-search`

Explain Component architecture
 - Draw Wireframes for App
 - Outline Components

Explain Downward Data Flow

Explain the difference between Functional Components (dumb) and Class Components (smart)

Boilerplate out the files
  - Start with Functional Components
  - imports
  - export defaults
  - wire up app

Explain state
  - If state is updated inside of a component then the component is re-rendered with the new info.
  - value={this.state.term} creates a controlled input
  - onChange={e => this.setState({term: e.target.value})} creates a field that updates state.
